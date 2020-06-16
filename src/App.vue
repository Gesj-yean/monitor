<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import './assets/style/variable.less';
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: @font-size-normal;
  color: @font-color;
}
</style>
