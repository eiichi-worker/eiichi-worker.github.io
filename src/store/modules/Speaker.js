import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    StudyGroup: [
      {
        groupName: 'Facebook Developer Circle Osaka Vol.3',
        presentationName: 'WebエンジニアはVRだって作れちゃう',
        date: '2018-07-28',
        url: 'https://www.facebook.com/events/674526319553265/',
      },
      {
        groupName: '#1【PB Lab】 ビッグデータ 貯めて -> 分析 -> 可視化してみよう　ハンズオン',
        presentationName: '',
        date: '2018-02-24',
        url: 'https://plan-b.connpass.com/event/78506/',
      },
      {
        groupName: '【ヒカ☆ラボ関西】やってみよう、機械学習。ふれてみよう、ビッグデータ。vol.1',
        presentationName: '【ハンズオン】時系列分析を用いて着地予測つくろう♪',
        date: '2017-11-25',
        url: 'https://career.levtech.jp/hikalab/event/detail/143/',
      },
    ],
  },
  getters: {
    getStudyGroup: (state, getters, rootState) => {
      return state.StudyGroup
    },
  },
  mutations: {},
  actions: {},
}
