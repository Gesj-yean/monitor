<template>
  <drawer>
    <background v-if="addChartType==='background'" @chooseBg="handleChooseBg" />
    <theme v-else-if="addChartType==='theme'" @selectTheme="selectTheme" />
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
    },
    selectTheme (name) {
      this.$emit('selectTheme', name)
    }
  }
}
</script>

<style scoped lang="less">
</style>
