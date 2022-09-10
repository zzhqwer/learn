import Vue from 'vue'
import VueRouter from 'vue-router'

import MyMain from '../components/MyMain.vue'
import MyMa from  '../views/MyMa.vue'
import MyDevelop from '../components/child/MyDevelop.vue'
import MyApply from '../components/child/MyApply.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mymain',
    component: MyMain,
  },
  {
    path: '/myma',
    name: 'myma',
    component: MyMa,

    //子路由 首页的点击购买跳转到每一个不同页面
    children: [
      {
        path:'/myma/develop',
        name: 'develop',
        component: MyDevelop
      },
      {
        path: '/myma/apply',
        name: 'apply',
        component: MyApply
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
