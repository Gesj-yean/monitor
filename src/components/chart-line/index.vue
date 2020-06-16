<template>
<div class="class-line">
  <echarts :option="option" @chart-init="init"></echarts>
</div>
</template>

<script>
import Echarts from '@/components/chart'
export default {
  name: 'ChartLine',
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
  mounted () {
    this.chart.resize()
  },
  created () {
    this.option = {
      backgroundColor: '#0E204A',
      grid: {
        top: '18%',
        left: '5%',
        right: '5%',
        bottom: '25%'
        // containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { // 坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.4)'
          }
        },
        axisLabel: { // 坐标轴刻度标签的相关设置
          textStyle: {
            color: '#d1e6eb',
            margin: 15
          }
        },
        axisTick: {
          show: false
        },
        data: ['2014', '2015', '2016', '2017', '2018', '2019']
      }],
      yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false,
          margin: 20,
          textStyle: {
            color: '#d1e6eb'

          }
        },
        axisTick: {
          show: false
        }
      }],
      series: [{
        name: '注册总量',
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbolSize: 8,
        lineStyle: {
          normal: {
            color: '#53fdfe' // 线条颜色
          },
          borderColor: '#f0f'
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#fff'
          }
        },
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,1)'
          }
        },
        tooltip: {
          show: false
        },
        areaStyle: { // 区域填充样式
          normal: {
            // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: 'rgba(0,150,239,0.3)',
            shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
            shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
        },
        data: [150, 200, 259, 360, 378, 450, 450]
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
.class-line {
  width: 100%;
  height: 100%;
}
</style>
