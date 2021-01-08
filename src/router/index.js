import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Recommend',
    component: () => import('../views/Recommend.vue')
  },
  {
    path: '/hot',
    name: 'HotMusic',
    component: () => import('../views/HotMusic.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:"hash"
})

export default router
