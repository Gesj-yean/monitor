<template>
<div class="echarts"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'Echarts',
  props: {
    option: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    option (nv) {
      this.chart.clear()
      this.chart.setOption(nv || {})
      this.$emit('done', this.chart)
    }
  },
  mounted () {
    this.chart = echarts.init(this.$el)
    this.chart.setOption(this.option || {})
    window.addEventListener('resize', () => {
      this.chart && this.chart.resize()
    })
    document.addEventListener('webkitfullscreenchange', () => {
      window.setTimeout(() => {
        this.chart && this.chart.resize()
      }, 100)
    })
    this.$emit('chart-init', this.chart)
  }
}
</script>

<style>
.echarts {
  height: 100%;
  width: 100%;
}
</style>
