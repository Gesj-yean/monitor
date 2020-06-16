<template>
  <div class="center-wrapper">
    <div class="canvas-wrapper" ref="canvas"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    addChartType: {
      type: String,
      default: ''
    },
    config: {
      type: String,
      default: ''
    }
  },

  watch: {
    addChartType (type) {
      this.appendChart(type)
    },
    config (val) {
      this.handleImportConfig(val)
    }
  },

  mounted () {
    this.getScrollSize()
  },

  methods: {

    /**
     * @description 新建一个图表
     * @params {String} 图表类型
     */
    appendChart (type) {
      const div = document.createElement('div')
      div.style.height = '50%'
      div.style.width = '25%'
      this.$refs.canvas.appendChild(div)
      const myChart = echarts.init(div)
      const config = require(`@/constants/config/${type}.js`)
      myChart.setOption(config.option)
    },

    /**
     * @description 导入图表配置
     * @params {String} 配置项
     */
    handleImportConfig (option) {
      const div = document.createElement('div')
      div.style.height = '50%'
      div.style.width = '25%'
      this.$refs.canvas.appendChild(div)
      const myChart = echarts.init(div)
      myChart.setOption((new Function('return ' + option))())  /* eslint-disable-line */
    },
    /**
     * @description 修改画布元素宽高为屏幕大小
     */
    getScrollSize () {
      const width = document.body.clientWidth
      const height = window.screen.height
      this.$refs.canvas.style.setProperty('--canvasWidth', `${width}px`)
      this.$refs.canvas.style.setProperty('--canvasHeight', `${height}px`)
    }
  }
}
</script>

<style lang="less" scoped>
.center-wrapper {
  width: calc(100% - 580px);
  margin: 0 15px;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  background: #fff;
  .canvas-wrapper {
    width: var(--canvasWidth);
    height: var(--canvasHeight);
    background: #f2f2f2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
