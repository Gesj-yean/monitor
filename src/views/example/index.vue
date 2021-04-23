<template>
  <div class="example-wrapper">
    <div class="global-title">实例</div>
    <noData />
  </div>
</template>

<script>
import noData from '@/base/no-data/no-data'
export default {
  components: {
    noData
  }
}
</script>

<style scoped lang="less">
.example-wrapper {
  position: relative;
  min-height: calc(100vh - 100px);
}
</style>
