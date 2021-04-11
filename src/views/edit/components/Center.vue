<template>
  <div class="center-wrapper">
    <div class="operation-wrapper">
      <el-button size="mini" @click="goBack">返回</el-button>
      <el-button size="mini" type="primary" @click="handleExportConfig">导出配置</el-button>
    </div>
    <div class="canvas-wrapper" ref="canvas">
      <template v-if="IsCanvasPrepared">
        <vue-draggable-resizable
          v-for="(item,index) in currentChartList"
          :key="item.id"
          :w="item.width"
          :h="item.height"
          :x="item.x"
          :y="item.y"
          :snap="true"
          :is-conflict-check="false"
          :parent="true"
          @dragging="onDrag"
          @resizing="onResize"
          @activated="onClickChart(item,index)"
          @deactivated="onMoveout(index)"
        >
          <chart :height="item.height" :width="item.width" :option="item.option" :theme="theme" />
          <div class="info">
            <div>x轴：{{item.x}} 高度：{{item.height}}</div>
            <div>y轴：{{item.y}} 宽度：{{item.width}}</div>
            <el-button
              class="icon-wrapper"
              size="mini"
              type="danger"
              plain
              @click="deleteTheChart(index)"
              icon="el-icon-delete"
            ></el-button>
          </div>
        </vue-draggable-resizable>
      </template>
    </div>
  </div>
</template>

<script>
import Canvas2Image from '@/assets/js/canvas2image.js'
import html2canvas from 'html2canvas'
import { mapState, mapMutations } from 'vuex'
import Chart from '@/components/chart/index'
import ChartClass from '@/assets/js/class/chart.js'
import screenfull from 'screenfull'
import { SCALE } from '@/assets/js/constants/config.js'
import FileSaver from 'file-saver'
const _ = require('lodash')
const OTHER_CONFIG = ['background', 'theme']

export default {
  props: {
    addChartType: {
      type: String,
      default: ''
    },
    config: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    },
    isFullSize: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      fileId: +this.$route.params.id,
      IsCanvasPrepared: false,
      chartIndex: 0,
      screenHeight: 0,
      screenWidth: 0
    }
  },
  computed: {
    ...mapState({
      currentChartList: 'currentChartList',
      fileList: 'fileList',
      curChart: 'curEdit'
    })
  },

  created () {
    const item = this.fileList.find(item => item.id === this.fileId)
    if (item) {
      this.setCurrentChartList(item.chartList)
      item.theme && this.$emit('selectTheme', item.theme)
      item.background && this.changeBg(item.background)
    }
  },
  watch: {
    addChartType (type) {
      !OTHER_CONFIG.includes(type) && this.appendChart(type)
    },
    config (val) {
      this.handleImportConfig(val)
    },
    background (val) {
      this.changeBg(val)
    },
    isFullSize (val) {
      this.handleFullScreen()
    }
  },

  mounted () {
    this.getScrollSize()

    // 监听全屏
    const that = this
    screenfull.on('change', () => {
      if (screenfull.isFullscreen) {
        that.scaleScreen(true)
      } else {
        that.scaleScreen(false)
      }
    })
  },

  beforeDestroy () {
    screenfull.off('change')
  },

  methods: {
    ...mapMutations(['scaleScreen', 'setCurrentChartList', 'addChart', 'updateChart', 'deleteChart', 'setCurEdit', 'fileListAdd', 'recordOriginChartList', 'restoreOriginChartList', 'fileListUpdate']),

    /**
     * 基础版快照方案
     * @param {HTMLElement} container
     * @param {object} options html2canvas相关配置
     */
    convertToImage (container, options = {}) {
      return html2canvas(container, options).then(canvas => {
        const imageEl = Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height)
        return imageEl
      })
    },
    /**
     * @description 改变背景
     */
    changeBg (val) {
      this.$nextTick(() => {
        const a = this.$refs.canvas
        if (val.startsWith('#') || val.startsWith('rgb')) {
          a.style.backgroundImage = null
          a.style.backgroundSize = null
          a.style.background = val
        } else {
          a.style.background = null
          a.style.backgroundImage = `url(${val})`
          a.style.backgroundSize = 'cover'
        }
      })
    },
    /**
     * @description 全屏
     */
    handleFullScreen () {
      if (screenfull.isEnabled) {
        screenfull.request(this.$refs.canvas)
      }
    },

    /**
     * @description 响应图表缩放
     * @params {Array} 左上角(x,y)坐标，选中图形宽高
     */
    onResize (x, y, width, height) {
      this.updateChart({
        index: this.chartIndex,
        x,
        y,
        height,
        width
      })
    },

    /**
     * @description 响应图表拖拽
     * @params {Array} 图形左上角(x,y)坐标
     */
    onDrag (x, y) {
      this.updateChart({
        index: this.chartIndex,
        x,
        y
      })
    },

    onClickChart (item, index) {
      this.setCurEdit(item)
      this.chartIndex = index
      const nodes = document.getElementsByClassName('info')
      nodes[index].style.opacity = 1
    },

    onMoveout (index) {
      const nodes = document.getElementsByClassName('info')
      nodes[index].style.opacity = 0
    },

    appendChart (type) {
      const config = require(`@/assets/js/constants/echarts-config/${type}.js`)
      this.addChart(new ChartClass({
        option: config.option
      }))
    },

    /**
     * @description 响应图表删除
     * @params {Number} 序号
     */
    deleteTheChart (index) {
      this.$confirm('是否删除改图表?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteChart(index)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => { })
    },

    handleImportConfig (option) {
      this.addChart(new ChartClass({
        option: (new Function('return ' + option))()/* eslint-disable-line */
      }))
    },

    /**
     * @description 修改画布元素宽高为屏幕大小
     */
    getScrollSize () {
      this.screenHeight = window.screen.height
      this.screenWidth = document.body.clientWidth
      this.$refs.canvas.style.setProperty('--canvasHeight', `${this.screenHeight / SCALE}px`)
      this.$refs.canvas.style.setProperty('--canvasWidth', `${this.screenWidth / SCALE}px`)
      this.IsCanvasPrepared = true
    },

    /**
     * @description 百分比转为像素值
     */
    calPercent (value, type) {
      return type === 'x' ? value / this.screenWidth : value / this.screenHeight
    },

    /**
     * @description 保存
     */
    goBack () {
      this.$confirm('是否保存当前文件?', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (this.fileId === -1) {
          // 屏幕快照
          setTimeout(() => {
            this.convertToImage(this.$refs.canvas).then(res => {
              // 创建文件
              this.fileListAdd({
                id: Math.random(),
                createTime: new Date(),
                theme: this.theme,
                background: this.background,
                chartList: this.currentChartList,
                screenShot: res.src
              })
            })
            this.$router.go(-1)
            this.setCurrentChartList()
            this.recordOriginChartList()
          }, 200)
        } else {
          setTimeout(() => {
            this.convertToImage(this.$refs.canvas).then(res => {
              const { fileId, fileList } = this
              const index = fileList.findIndex(i => i.id === fileId)
              if (index > -1) {
                const params = _.cloneDeep(fileList)
                params.splice(index, 1, { ...fileList[index], screenShot: res.src })
                this.fileListUpdate(params)
              }
            })
            this.$router.go(-1)
            this.setCurrentChartList()
            this.recordOriginChartList()
          }, 200)
        }
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }).catch(action => {
        if (action === 'cancel') {
          if (this.fileId !== -1) {
            this.restoreOriginChartList(this.fileId)
          }
          this.$router.go(-1)
          this.setCurrentChartList()
          this.recordOriginChartList()
        }
      })
    },

    /**
     * @description 响应导出配置
     */
    handleExportConfig () {
      const data = JSON.stringify(this.currentChartList)
      const blob = new Blob([data], { type: '' })
      FileSaver.saveAs(blob, 'config.json')
    }
  },
  components: {
    Chart
  }
}
</script>

<style lang="less" scoped>
.center-wrapper {
  position: relative;
  width: calc(100% - 200px);
  height: calc(100% - 60px);
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #f2f3f5;
  .operation-wrapper {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .canvas-wrapper {
    position: relative;
    width: var(--canvasWidth);
    height: var(--canvasHeight);
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 0 10px #d6dce0;
    outline: 10px solid #d6dce0;
    outline-offset: 0px;
    .info {
      opacity: 0;
      .icon-wrapper {
        position: absolute;
        bottom: -35px;
        right: 5px;
      }
    }
  }
}
</style>
