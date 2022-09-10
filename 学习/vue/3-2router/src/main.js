import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://api.d5.nz/api'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
