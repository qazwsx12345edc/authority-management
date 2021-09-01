import VueRouter from "vue-router";
import NotFound from '../pages/notFound.vue'
import Login from '../pages/login.vue'
// import store from '../store/index'

const routes = [
  {
    path: '/',
    redirect: '/system/users'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
