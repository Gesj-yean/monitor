<template>
  <div class="right-wrapper" v-show="showPage">
    <i class="el-icon-close icon-wrapper"></i>

    <background v-if="addChartType==='background'" />
  </div>
</template>

<script>
import background from '@/components/background/index'
export default {
  props: {
    addChartType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showPage: true
    }
  },
  components: {
    background
  }
}
</script>

<style lang="less" scoped>
.right-wrapper {
  height: 100%;
  width: 300px;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  padding: 20px;
  background: #fff;
  box-shadow: 5px 5px 15px #eee;
  .icon-wrapper {
    float: right;
    font-size: 20px;
  }
}
</style>
