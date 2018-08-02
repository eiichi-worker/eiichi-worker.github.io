import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    list: [
      {
        name: '基本情報技術者試験',
        date: '',
        url: '',
      },
      {
        name: '応用情報技術者試験',
        date: '',
        url: '',
      },
      {
        name: 'データベーススペシャリスト試験',
        date: '',
        url: '',
      },
      {
        name: 'Oracle 11g Bronze',
        date: '',
        url: '',
      },
      {
        name: '第2種 電気工事士',
        date: '',
        url: '',
      },
      {
        name: 'CCNA(失効)',
        date: '',
        url: '',
      },
    ],
  },
  getters: {
    getAll: (state, getters, rootState) => {
      return state.list
    },
  },
  mutations: {},
  actions: {},
}
