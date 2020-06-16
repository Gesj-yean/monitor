<template>
  <div class="navigator-line">
    <div class="navigator-line-top"></div>
    <div class="navigator-line-left"></div>
    <div class="navigator-line-label">{{`${x},${y}`}}</div>
  </div>
</template>

<script>
export default {
  name: 'navigatorLine',
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
.navigator-line{
  display: block;
  // position: absolute;
  &-top{
    position: absolute;
    border-left: 1px dashed #09f;
    width: 0;
    height: 10000px;
    left: 0;
    transform: translateY(-100%);
  }
  &-left{
    position: absolute;
    border-top: 1px dashed #09f;
    width: 10000px;
    height: 0;
    top: 0;
    transform: translateX(-100%);
  }
  &-label{
    position: absolute;
    top: -24px;
    left: -68px;
    color: #09f;
  }
}
</style>
