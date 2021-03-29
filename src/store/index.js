import Vue from 'vue'
import Vuex from 'vuex'
import { scale } from '@/assets/js/constants/config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curEdit: {},
    currentChartList: [],
    fileList: []
  },
  mutations: {
    setCurEdit (state, data) {
      state.curEdit = data
    },
    addChart (state, data) {
      state.currentChartList.push(data)
    },
    updateChart (state, data) {
      state.currentChartList[data.index] = Object.assign(state.currentChartList[data.index], data)
    },
    deleteChart (state, index) {
      state.currentChartList.splice(index, 1)
    },
    setCurrentChartList (state, list = []) {
      state.currentChartList = list
    },
    fileListDelete (state, item) {
      const index = state.fileList.indexOf(item)
      state.fileList.splice(index, 1)
    },
    fileListAdd (state, item) {
      state.fileList.push(item)
    },
    scaleScreen (state, isGrow) {
      console.log(state.currentChartList)
      if (isGrow) {
        state.currentChartList.forEach(item => {
          item.height *= scale
          item.width *= scale
        })
      } else {
        state.currentChartList.forEach(item => {
          item.height /= scale
          item.width /= scale
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
