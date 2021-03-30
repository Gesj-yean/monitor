<template>
  <div class="header-wrapper">
    <div class="left"></div>
    <div class="right">
      <el-button size="mini" icon="el-icon-rank" @click="handleFullScreen">全屏</el-button>
      <el-button size="mini" @click="goBack">返回</el-button>
      <el-button size="mini" type="primary" @click="handleExportConfig">导出配置</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import FileSaver from 'file-saver'
const _ = require('lodash')

export default {
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState({
      currentChartList: 'currentChartList',
      fileList: 'fileList',
      originChartList: 'originChartList'
    })
  },
  data () {
    return {
      currentFileId: +this.$route.params.id
    }
  },
  created () {
    this.currentFileId !== -1 && this.recordOriginChartList(this.currentFileId)
  },
  watch: {
    theme(newVal, oldVal) {
      if (newVal !== oldVal) {
        const { currentFileId, fileList } = this
        const index = fileList.findIndex(i => i.id === currentFileId)
        if (index > -1) {
          const params = _.cloneDeep(fileList)
          params.splice(index, 1, { ...fileList[index], theme: newVal })
          this.fileListUpdate(params)
        }
      }
    }
  },
  methods: {
    ...mapMutations(['fileListUpdate', 'fileListAdd', 'setCurrentChartList', 'recordOriginChartList', 'restoreOriginChartList']),
    /**
     * @description 响应全屏
     */
    handleFullScreen () {
      this.$emit('handleFullScreen')
    },

    /**
     * @description 响应导出配置
     */
    handleExportConfig () {
      const data = JSON.stringify(this.currentChartList)
      const blob = new Blob([data], { type: '' })
      FileSaver.saveAs(blob, 'config.json')
    },

    /**
     * @description 返回
     */
    goBack () {
      this.$confirm('是否保存当前文件?', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (this.currentFileId === -1) {
          this.fileListAdd({
            id: Math.random(),
            createTime: new Date(),
            theme: this.theme,
            item: this.currentChartList
          })
        }
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        this.$router.go(-1)
        this.setCurrentChartList()
        this.recordOriginChartList()
      }).catch(action => {
        if (action === 'cancel') {
          if (this.currentFileId !== -1) {
            this.restoreOriginChartList(this.currentFileId)
          }
          this.$router.go(-1)
          this.setCurrentChartList()
          this.recordOriginChartList()
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header-wrapper {
  padding: 0 20px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #2d3c53;
}
</style>
