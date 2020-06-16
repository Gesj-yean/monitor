<template>
<div class="class-bar">
  <echarts :option="option" @chart-init="init"></echarts>
</div>
</template>

<script>
import Echarts from '@/components/chart'
import echarts from 'echarts'
export default {
  name: 'ChartBar',
  components: {
    Echarts
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      option: {},
      chart: null
    }
  },
  watch: {
    config: {
      handler: function (val, oldVal) {
        this.chart && this.chart.resize()
      },
      deep: true,
      immediate: true
    }
  },
  created () {
    this.option = {
      backgroundColor: '#00265f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
      },
      xAxis: [{
        type: 'category',
        data: ['工作票', '操作票', '抢修', '用电调查', '设备巡视', '现场勘查', '到岗到位'],
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)'
          }
        },
        axisLabel: {
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 14
          }
        }
      }],
      yAxis: [{
        axisLabel: {
          formatter: '{value}',
          color: '#e2e9ff'
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)'
          }
        }
      }],
      series: [{
        type: 'bar',
        data: [300, 450, 770, 203, 255, 188, 156],
        barWidth: '20px',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0,244,255,1)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(0,77,167,1)' // 100% 处的颜色
            }], false),
            barBorderRadius: [30, 30, 30, 30],
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4
          }
        }
      }]
    }
  },
  methods: {
    init (chart) {
      this.chart = chart
    }
  }
}
</script>

<style lang="less" scoped>
.class-bar {
  width: 100%;
  height: 100%;
}
</style>
