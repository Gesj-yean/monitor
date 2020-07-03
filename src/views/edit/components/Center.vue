<template>
  <div class="center-wrapper">
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
          <!-- :w="parseInt(item.width/screenWidth*100)"
          :h="parseInt(item.height/screenHeight*100)"
          :x="parseInt(item.x/screenWidth*100)"
          :y="parseInt(item.y/screenHeight*100)"-->
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
import { mapState, mapMutations } from 'vuex'
import Chart from '@/components/chart/index'
import ChartClass from '@/assets/js/class/chart.js'
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
    backgroundImg: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      fileId: this.$route.params.id,
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
    const item = this.fileList.find(item => item.id === +this.fileId)
    this.setCurrentChartList(item.item)
  },
  watch: {
    addChartType (type) {
      !OTHER_CONFIG.includes(type) && this.appendChart(type)
    },
    config (val) {
      this.handleImportConfig(val)
    },
    backgroundImg (val) {
      const a = this.$refs.canvas
      a.style.backgroundImage = `url(${val})`
      a.style.backgroundSize = 'cover'
    }
  },

  mounted () {
    this.getScrollSize()
  },

  methods: {
    ...mapMutations(['setCurrentChartList', 'addChart', 'updateChart', 'deleteChart', 'setCurEdit']),
    onResize (x, y, width, height) {
      this.updateChart({
        index: this.chartIndex,
        // x: parseInt(x / this.screenWidth * 100),
        // y: parseInt(y / this.screenHeight * 100),
        // width: parseInt(width / this.screenWidth * 100),
        // height: parseInt(height / this.screenHeight * 100)
        x,
        y,
        height,
        width
      })
    },
    onDrag (x, y) {
      this.updateChart({
        index: this.chartIndex,
        // x: parseInt(x / this.screenWidth * 100),
        // y: parseInt(y / this.screenHeight * 100)
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
      const config = require(`@/assets/js/constants/config/${type}.js`)
      this.addChart(new ChartClass({
        option: config.option
      }))
    },
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
      this.screenWidth = document.body.clientWidth
      this.screenHeight = window.screen.height
      this.$refs.canvas.style.setProperty('--canvasWidth', `${this.screenWidth}px`)
      this.$refs.canvas.style.setProperty('--canvasHeight', `${this.screenHeight}px`)
      this.IsCanvasPrepared = true
    },

    /**
     * @description 百分比转为像素值
     */
    calPercent (value, type) {
      console.log(value)
      console.log(this.screenWidth)
      return type === 'x' ? value / this.screenWidth : value / this.screenHeight
    }
  },
  components: {
    Chart
  }
}
</script>

<style lang="less" scoped>
.center-wrapper {
  width: calc(100% - 220px);
  margin-left: 15px;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  background: #fff;
  .canvas-wrapper {
    position: relative;
    width: var(--canvasWidth);
    height: var(--canvasHeight);
    background: #f2f2f2;
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
