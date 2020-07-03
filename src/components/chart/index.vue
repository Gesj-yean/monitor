<template>
  <div ref="chart" style="height:100%;width:100%"></div>
</template>

<script>
import echarts from 'echarts'
import dark from '../theme/config/dark' // eslint-disable-line
import purplePassion from '../theme/config/purple-passion' // eslint-disable-line
import vintage from '../theme/config/vintage' // eslint-disable-line
import westeros from '../theme/config/westeros' // eslint-disable-line
import wonderland from '../theme/config/wonderland' // eslint-disable-line

export default {
  name: 'chart',
  props: {
    defaultTheme: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    },
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
    theme (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.myChart.dispose()
        this.myChart = echarts.init(this.$refs.chart, newVal)
        this.myChart.setOption(this.option)
      }
    },
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
      console.log(this.defaultTheme)
      this.myChart = echarts.init(this.$refs.chart, this.defaultTheme)
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
