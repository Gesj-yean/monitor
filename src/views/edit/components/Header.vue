<template>
  <div class="header-wrapper">
    <div class="left"></div>
    <div class="right">
      <el-button size="mini" icon="el-icon-rank" @click="handleFullScreen">全屏</el-button>
      <el-button size="mini" @click="$router.go(-1)">返回</el-button>
      <el-button size="mini" type="primary" @click="handleExportConfig">导出配置</el-button>
      <el-button size="mini" type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FileSaver from 'file-saver'
export default {
  computed: {
    ...mapState({
      allChartList: 'allChartList'
    })
  },
  methods: {
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
      const data = JSON.stringify(this.allChartList)
      const blob = new Blob([data], { type: '' })
      FileSaver.saveAs(blob, 'config.json')
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
