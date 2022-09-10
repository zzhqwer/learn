import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import OrderView from '../views/OrderView.vue'
import UserView from '../views/UserView.vue'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

import DetailView from '../views/DetailView.vue'
import CinemaView from '../views/CinemaView.vue'

import SeatView from '../views/SeatView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  //详情页
  {
    path: '/detail',
    name: 'detail',
    component: DetailView
  },
  //场次
  {
    path: '/cinema',
    name: 'cinema',
    component: CinemaView
  },
  {
    path: '/seat',
    name: 'seat',
    component: SeatView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
