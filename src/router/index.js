import VueRouter from "vue-router";
import Orders from '../pages/orders.vue'
import Goods from '../pages/goods.vue'
import Users from '../pages/users.vue'
import Imgs from '../pages/imgs.vue'
import Financial from '../pages/financial.vue'


const routes = [
  {
    path: '/',
    redirect: '/orders'
  },
  {
    path: '/orders',
    component: Orders
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/imgs',
    component: Imgs
  },
  {
    path: '/financial',
    component: Financial
  }
]

const router = new VueRouter({
  routes
})

export default router