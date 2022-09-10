import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://api.apiopen.top'
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
