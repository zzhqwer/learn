import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import Qs from 'qs'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
// 使用
Vue.use(MintUI)
Vue.prototype.$http = Axios
Vue.prototype.qs = Qs
Vue.prototype.imgUrl = "http://film.glkjjt.com/"
axios.defaults.baseURL = 'http://film.glkjjt.com/api'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
