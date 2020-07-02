import Vue from 'vue'
import Vuex from 'vuex'

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
    fileListAdd (state, item) {
      state.fileList.push(item)
    },
    fileListDelete (state, item) {

    },
    fileListUpdate (state, item) {

    }
  },
  actions: {
  },
  modules: {
  }
})
