import Vue from 'vue'
import Vuex from 'vuex'
import { SCALE } from '@/assets/js/constants/config.js'
import { Message } from 'element-ui'
const _ = require('lodash')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curEdit: {}, // 当前编辑的图表
    currentChartList: [], // 当前文件的当前数据
    originChartList: [], // 当前文件的原始数据
    fileList: [] // 文件列表
  },
  mutations: {
    // 设置当前编辑的图表
    setCurEdit (state, data) {
      state.curEdit = data
    },

    // 当前画布添加图表
    addChart (state, data) {
      state.currentChartList.push(data)
    },

    // 更新图表
    updateChart (state, data) {
      state.currentChartList[data.index] = Object.assign(state.currentChartList[data.index], data)
    },

    // 删除图表
    deleteChart (state, index) {
      state.currentChartList.splice(index, 1)
    },

    // 设置当前图表列表
    setCurrentChartList (state, list = []) {
      state.currentChartList = list
    },

    // 文件删除
    fileListDelete (state, item) {
      const index = state.fileList.indexOf(item)
      state.fileList.splice(index, 1)
    },

    // 文件添加
    fileListAdd (state, item) {
      state.fileList.push(item)
    },

    fileListUpdate(state, item) {
      state.fileList = _.cloneDeep(item)
    },

    // 记录当前文件的原始数据
    recordOriginChartList (state, id) {
      const fileList = state.fileList
      const item = fileList.find(i => +i.id === +id)
      if (item) {
        state.originChartList = _.cloneDeep(item)
      } else {
        state.originChartList = {}
      }
    },

    // 还原当前文件的原始数据
    restoreOriginChartList (state, id) {
      const fileList = state.fileList
      const index = fileList.findIndex(i => +i.id === +id)
      if (index > -1) {
        fileList.splice(index, 1, state.originChartList)
      } else {
        Message.warning('未找到文件！')
      }
    },

    // 缩放屏幕
    scaleScreen (state, isGrow) {
      if (isGrow) {
        state.currentChartList.forEach(item => {
          item.height *= SCALE
          item.width *= SCALE
        })
      } else {
        state.currentChartList.forEach(item => {
          item.height /= SCALE
          item.width /= SCALE
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
