<template>
  <drawer>
    <background v-if="addChartType==='background'" @chooseBg="handleChooseBg" />
    <chartConfig v-else />
  </drawer>
</template>

<script>
import drawer from '@/base/drawer/drawer'
import chartConfig from '@/components/chartConfig/index'
import background from '@/components/background/index'
export default {
  components: {
    drawer,
    background,
    chartConfig
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
  },
  methods: {
    handleChooseBg (item) {
      this.$emit('chooseBg', item)
    }
  }
}
</script>

<style scoped lang="less">
</style>
