/**
 * @description 图表类
 * @params {Object} 图表 option
 * @params {Number} 横坐标百分比 x
 * @params {Number} 纵坐标百分比 y
 * @params {Number} 宽度百分比 width
 * @params {Number} 高度百分比 height
 */
export default class chartClass {
  constructor({ option, x = 0, y = 0, width = 300, height = 300 }) {
    this.id = Math.random()
    this.option = option
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
}
