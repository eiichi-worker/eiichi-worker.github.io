import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
  },
  mutations: {},
  actions: {},
})
