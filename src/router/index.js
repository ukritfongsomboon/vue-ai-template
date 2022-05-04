import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/view-login.vue'
import home from '@/views/view-home.vue'
import page1 from '@/views/home/view-page1.vue'
import page2 from '@/views/home/view-page2.vue'
import page3 from '../views/home/view-page3.vue'
Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: { name: 'login' } },
  { path: '/login', name: 'login', component: login, meta: { requireLogin: false } },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: { requireLogin: true },
    redirect: { name: 'page1' },
    children: [
      { path: 'page1', name: 'page1', component: page1, meta: { requireLogin: true } },
      { path: 'page2', name: 'page2', component: page2, meta: { requireLogin: true } },
      { path: 'page3', name: 'page3', component: page3, meta: { requireLogin: true } }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, form, next) => {
  const ls = localStorage.getItem('token')
  if (to.matched.some((x) => x.meta.requireLogin)) {
    // ต้อง Login
    if (ls === undefined || ls === null) {
      // แต่ไม่มี token
      next({ name: 'login' })
    } else {
      // มี token
      next()
    }
  } else {
    // ไม่ต้อง login
    if (ls === undefined || ls === null) {
      next()
    } else {
      if (to.name === 'login') {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  }
})

export default router
