import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curEdit: {},
    allChartList: []
  },
  mutations: {
    setCurEdit (state, data) {
      state.curEdit = data
    },
    addChart (state, data) {
      state.allChartList.push(data)
      console.log(state.allChartList)
    },
    updateChart (state, data) {
      state.allChartList[data.index] = Object.assign(state.allChartList[data.index], data)
    },
    deleteChart (state, index) {
      state.allChartList.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
