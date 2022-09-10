import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/components/MyHome.vue'
import MyServer from '@/components/MyServer.vue'
import MyServer1 from '@/components/MyServer1.vue'
import MyServer2 from '@/components/MyServer2.vue'
import MyLogin from '@/components/MyLogin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MyHome

  },
  {
    path: '/server',
    name: 'server',
    component: MyServer,
    children: [
      {
        path: '/server/server1',
        component: MyServer1
      },
      {
        path: '/server/server2',
        component: MyServer2
      }
    ]
  },
  {
    path:'/login',
    name: 'login',
    component: MyLogin
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
