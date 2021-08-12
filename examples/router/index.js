import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/Button.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import(/* webpackChunkName: "about" */ '../views/TimeLine.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
