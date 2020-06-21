<template>
  <div ref="chart" style="height:100%;width:100%"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart',
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    option: {
      type: Object,
      default: () => { }
    }
  },
  watch: {
    height (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.onResize()
      }
    },
    width (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.onResize()
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.drawChart()
    })
  },
  methods: {
    drawChart () {
      this.myChart = echarts.init(this.$refs.chart)
      this.myChart.setOption(this.option)
    },
    onResize () {
      this.myChart && this.myChart.resize()
    }
  }
}
</script>

<style scoped lang="less">
</style>
