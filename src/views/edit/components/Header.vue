<template>
  <div class="header-wrapper">
    <div class="left"></div>
    <div class="right">
      <el-button size="mini" icon="el-icon-rank" @click="handleFullScreen">全屏</el-button>
      <el-button size="mini" @click="$router.go(-1)">返回</el-button>
      <el-button size="mini" type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleFullScreen () {
      this.$emit('handleFullScreen')
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
