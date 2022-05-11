import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    text: null,
    tagInfo: null,
    server: null,
  },
  getters: {
    getData: state => {
      return state.data
    },
    getText: state => {
      return state.text
    },
    getTagInfo: state => {
      return state.tagInfo
    },
  },
  actions: {},
  mutations: {
    setData(state, payload) {
      state.data = payload
    },
    setText(state, payload) {
      state.text = payload
    },
    setTagInfo(state, payload) {
      state.tagInfo = payload
    },
  },
})
