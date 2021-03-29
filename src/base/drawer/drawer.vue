<template>
  <div :class="['drawer-wrapper',showPage?'moveIn':'moveOut']">
    <div class="config-wrapper">
      <slot />
    </div>
    <div class="hander-wrapper" @click="showPage=!showPage">
      <i :class="showPage?'el-icon-close':'el-icon-setting'"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showPage: false
    }
  }
}
</script>

<style lang="less" scoped>
.drawer-wrapper {
  height: 100%;
  box-shadow: 5px 5px 15px #eee;
  position: absolute;
  top: 60px;
  right: 0;
  width: 0;
  background: #fff;
  .config-wrapper {
    padding: 20px;
    height: calc(100% - 100px);
  }
  .hander-wrapper {
    background: #2d3c53;
    height: 20px;
    width: 20px;
    font-size: 20px;
    padding: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: #fff;
    position: absolute;
    top: 40%;
    left: -40px;
  }
}
.moveIn {
  animation: iconMoveIn 0.3s normal forwards;
}
.moveOut {
  animation: iconMoveOut 0.3s normal forwards;
}
@keyframes iconMoveIn {
  0% {
    width: 0;
  }
  100% {
    width: 340px;
  }
}
@keyframes iconMoveOut {
  0% {
    width: 340px;
  }
  100% {
    width: 0;
  }
}
</style>
