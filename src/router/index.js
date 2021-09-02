import VueRouter from "vue-router";
import NotFound from '../pages/notFound.vue'
import Login from '../pages/login.vue'
import store from '../store/index'

const routes = [
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

const componentMapper = {
  'system': () => import('../components/pageLayer.vue'),
  'users': () => import('../pages/users.vue'),
  'goods': () => import('../pages/goods.vue'),
  'imgs': () => import('../pages/imgs.vue'),
  'financial': () => import('../pages/financial.vue'),
  'orders': () => import('../pages/orders.vue'),
}

const router = new VueRouter({
  routes
})

router.componentMapper = componentMapper

router.beforeEach((to, from, next) => {
  const userAuthority = store.state.userAuthority
  if (userAuthority) {
    if (to.path === '/') {
      next('/system')
    }
    else {
      next()
    }
  }
  else {
    if (to.path === '/') {
      next('/login')
    }
    else {
      next()
    }
  }
})

export default router
