export const configApi = [
  {
    label: '标题组件',
    value: 'title',
    desc: '标题组件，包含主标题和副标题。'
  },
  {
    label: '图例组件',
    value: 'legend',
    desc: '图例组件展现了不同系列的标记(symbol)，颜色和名字。'
  },
  {
    label: '网格',
    value: 'grid',
    desc: '直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。'
  },
  {
    label: 'x 轴',
    value: 'xAxis',
    desc: '直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。'
  },
  {
    label: 'y 轴',
    value: 'yAxis',
    desc: '直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。'
  },
  {
    label: '极坐标系',
    value: 'polar',
    desc: '极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。'
  },
  {
    label: '极坐标系的径向轴',
    value: 'radiusAxis',
    desc: '极坐标系的径向轴。'
  },
  {
    label: '极坐标系的角度轴',
    value: 'angleAxis',
    desc: '极坐标系的角度轴。'
  },
  {
    label: '雷达图坐标系组件',
    value: 'radar',
    desc: '雷达图坐标系组件，只适用于雷达图。'
  },
  {
    label: '区域缩放',
    value: 'dataZoom',
    desc: 'dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。'
  },
  {
    label: '视觉映射组件',
    value: 'visualMap',
    desc: 'visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。'
  },
  {
    label: '提示框组件',
    value: 'tooltip',
    desc: '提示框组件。'
  },
  {
    label: '坐标轴指示器',
    value: 'axisPointer',
    desc: '这是坐标轴指示器（axisPointer）的全局公用设置。'
  },
  {
    label: '工具栏',
    value: 'toolbox',
    desc: '工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。'
  },
  {
    label: '区域选择组件',
    value: 'brush',
    desc: 'brush 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。'
  },
  {
    label: '地理坐标系组件',
    value: 'geo',
    desc: '地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。'
  },
  {
    label: '平行坐标系',
    value: 'parallel',
    desc: '平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表。'
  },
  {
    label: '平行坐标系中的坐标轴组件',
    value: 'parallelAxis',
    desc: '这个组件是平行坐标系中的坐标轴。'
  },
  {
    label: '单轴',
    value: 'singleAxis',
    desc: '单轴。可以被应用到散点图中展现一维数据。'
  },
  {
    label: '时间轴组件',
    value: 'timeline',
    desc: 'timeline 组件，提供了在多个 ECharts option 间进行切换、播放等操作的功能。'
  },
  {
    label: '原生图形元素组件',
    value: 'graphic',
    desc: 'graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group。'
  },
  {
    label: '日历坐标系组件',
    value: 'calendar',
    desc: '日历坐标系组件。'
  },
  {
    label: '数据集',
    value: 'dataset',
    desc: '数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。这在不少场景下能带来使用上的方便。'
  },
  {
    label: '无障碍组件',
    value: 'aria',
    desc: '支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问。'
  },
  {
    label: '系列列表',
    value: 'series',
    desc: '系列列表。每个系列通过 type 决定自己的图表类型。'
  },
  {
    label: '调色盘颜色列表',
    value: 'color',
    desc: '调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。'
  },
  {
    label: '背景色',
    value: 'backgroundColor',
    desc: '背景色，默认无背景。'
  },
  {
    label: '全局的字体样式',
    value: 'textStyle',
    desc: '全局的字体样式。'
  }
]
