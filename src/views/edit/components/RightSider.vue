<template>
  <drawer>
    <background v-if="addChartType==='background'" />
  </drawer>
</template>

<script>
import drawer from '@/base/drawer/drawer'
import background from '@/components/background/index'
export default {
  components: {
    drawer,
    background
  },
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
  }
}
</script>

<style scoped lang="less">
</style>
