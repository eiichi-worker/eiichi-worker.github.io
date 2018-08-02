import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    Programming: {
      PHP: {
        '5.6.*': 60,
        '7.0.*': 50,
      },
      Javascript: {
        ES5: 60,
        ES6: 50,
      },
      'Node.js': {
        'v10.*.*': 50,
      },
      Java: {
        'SE 8': 50,
        'SE 10': 50,
      },
      Python: {
        3: 40,
      },
      Bash: {
        '*': 60,
      },
    },
    Database: {
      MySql: {},
      Redis: {},
      DynamoDB: {},
      Elasticsearch: {
        '5.6': 30,
        '6.0': 30,
      },
    },
    BigData: {
      EMR: {},
      Treasuredata: {},
      Hive: {},
      Presto: {},
    },
    Cloud: {
      AWS: {},
      Firebase: {},
    },
    OS: {
      Windows: {},
      MAC: {},
      Linux: {
        CentOS: {
          '6': 0,
          '7': 0,
        },
        Ubuntu: {},
        'Amazon Linux': {
          '1': 0,
          '2': 0,
        },
      },
    },
  },
  getters: {
    getProgramingNames: (state, getters, rootState) => {
      return Object.keys(state.Programming)
    },
  },
  mutations: {},
  actions: {},
}
