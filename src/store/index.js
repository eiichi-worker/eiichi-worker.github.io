import Vue from 'vue'
import Vuex from 'vuex'
import Skills from './modules/Skills'
import LicensesAndCertifications from './modules/LicensesAndCertifications'
import Speaker from './modules/Speaker'
import Writer from './modules/Writer'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Skills,
    LicensesAndCertifications,
    Speaker,
    Writer,
  },
  strict: debug,
})
