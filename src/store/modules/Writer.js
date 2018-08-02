import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    Web: [
      {
        name: 'WEBのCI環境をサクッと始めてみる | Pinto!',
        date: '2018-03-28',
        url: 'https://service.plan-b.co.jp/blog/tech/10262/',
      },
      {
        name: '【エンジニア向け】よく聞くS3ってなに？ただのストレージじゃないの？？',
        date: '2017-09-27',
        url: 'https://service.plan-b.co.jp/blog/creative/4981/',
      },
      {
        name: 'https://service.plan-b.co.jp/blog/creative/2287/',
        date: '2017-06-16',
        url: 'https://service.plan-b.co.jp/blog/creative/2287/',
      },
    ],
  },
  getters: {
    getWeb: (state, getters, rootState) => {
      return state.Web
    },
  },
  mutations: {},
  actions: {},
}
