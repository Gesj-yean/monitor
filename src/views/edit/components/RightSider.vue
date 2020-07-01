<template>
  <drawer>
    <background v-if="addChartType==='background'" @chooseBg="handleChooseBg" />
    <theme v-if="addChartType==='theme'" @chooseBg="handleChooseBg" />
    <chartConfig v-else />
  </drawer>
</template>

<script>
import drawer from '@/base/drawer/drawer'
import chartConfig from '@/components/chartConfig/index'
import background from '@/components/background/index'
import theme from '@/components/theme/index'
export default {
  components: {
    drawer,
    background,
    theme,
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
