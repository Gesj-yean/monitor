<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">Logo</div>
    <el-menu
      default-active="/home/my"
      router
      class="menu-wrapper"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/home/my">我的</el-menu-item>
      <el-menu-item index="/home/example">实例</el-menu-item>
      <el-menu-item index="/home/document">配置文档</el-menu-item>
      <el-menu-item index="/home/plan">开发计划</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  methods: {
    handleSelect () { }
  }
}
</script>

<style lang="less" scoped>
.header-wrapper {
  display: flex;
  .logo-wrapper {
    line-height: 60px;
    width: 150px;
    text-align: center;
    border-bottom: solid 1px #e6e6e6;
  }
  .menu-wrapper {
    flex: 1;
  }
}
</style>
