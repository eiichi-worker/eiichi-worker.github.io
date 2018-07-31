import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import StoreSkills from './store/skills'

Vue.config.productionTip = false

new Vue({
  router,
  StoreSkills,
  render: h => h(App),
}).$mount('#app')
