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
      fileList: 'fileList'
    })
  },
  methods: {
    ...mapMutations(['fileListAdd', 'setCurrentChartList']),
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
    goBack() {
      this.$confirm('是否保存当前文件?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.fileListAdd({
          id: Math.random(),
          createTime: new Date(),
          theme: this.theme,
          item: this.currentChartList
        })
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        this.$router.go(-1)
        this.setCurrentChartList()
      }).catch(() => {
        this.$router.go(-1)
        this.setCurrentChartList()
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
