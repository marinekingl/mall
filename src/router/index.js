import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const home = () => import('views/home/home.vue')
const category = () => import('views/category/category.vue')
const profile = () => import('views/profile/profile.vue')
const cart = () => import('views/cart/cart.vue')
const detail = () => import('views/detail/detail.vue')


const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path:'/detail',
    component:detail
  },
]



const router = new Router({
  routes,
  mode: 'history'
})


export default router
