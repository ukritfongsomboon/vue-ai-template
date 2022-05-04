import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 10000,
  },
  getters: {
    count(state) {
      var parts = state.counter.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    },
  },
  mutations: {
    add(state, val) {
      state.counter += val
    },
    sub(state, val) {
      state.counter -= val
    },
  },
  actions: {
    subCount(contex, val) {
      contex.commit('sub', val)
    },
  },
  modules: {},
})
