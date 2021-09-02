/* eslint-disable no-unused-vars */
import VueRouter from "vue-router";
import NotFound from '../pages/notFound.vue'
import Login from '../pages/login.vue'
import store from '../store/index'
import PageLayer from '../components/pageLayer'
import Orders from '../pages/orders.vue'
import Goods from '../pages/goods.vue'
import Users from '../pages/users.vue'
import Imgs from '../pages/imgs.vue'
import Financial from '../pages/financial.vue'
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
    name: 'system',
    path: '/system',
    component: PageLayer,
    redirect: '/system/users',
    children: [
      {
        path: '/system/users',
        name: 'users',
        component: Users,
        meta: {
          title: '用户管理',
          icon: 'team',
          role: [1, 2, 3]
        }
      },
      {
        path: '/system/goods',
        name: 'goods',
        component: Goods,
        meta: {
          title: '商品管理',
          icon: 'shop',
          role: [1, 2, 3],
        }
      },
      {
        path: '/system/imgs',
        name: 'imgs',
        component: Imgs,
        meta: {
          title: '图片管理',
          icon: 'file-image',
          role: [1, 2, 3]
        }
      },
      {
        path: '/system/financial',
        name: 'financial',
        component: Financial,
        meta: {
          title: '财务报表',
          icon: 'transaction',
          role: [1]
        }
      },
      {
        path: '/system/orders',
        name: 'orders',
        component: Orders,
        meta: {
          title: '订单管理',
          icon: 'unordered-list',
          role: [1]
        }
      },
    ]
  },
  {
    path: '/404',
    component: NotFound
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

router.beforeEach((to, from, next) => {
  const userAuthority = store.state.userAuthority
  if (userAuthority) {
    if (to.meta.role && to.meta.role.indexOf(userAuthority) === -1) {
      next('/404')
    }
    else{
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    }else {
      next('/login')
    }
  }
})

export default router
