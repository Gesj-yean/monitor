import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curEdit: {},
    allChartList: []
  },
  mutations: {
    updateAllChart (state, data) {
      state.allChartList = data
    },
    setCurEdit (state, data) {
      state.curEdit = data
    },
    addChart (state, data) {
      state.allChartList.push(data)
      console.log(state.allChartList)
    }
  },
  actions: {
  },
  modules: {
  }
})
