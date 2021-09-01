const dynamicRoutes = {
  path: '/system',
  name: 'system',
  redirect: '/system/users',
  component: () => import('../components/pageLayer.vue'),
  children: [
    {
      path: '/system/users',
      component: () => import('../pages/users.vue'),
      meta: {
        level: 'normal',
        title: '用户管理',
        icon: 'team',
        role:['admin','']
      }
    },
    {
      path: '/system/goods',
      component: () => import('../pages/goods.vue'),
      meta: {
        level: 'normal',
        title: '商品管理',
        icon: 'shop'
      }
    },
    {
      path: '/system/imgs',
      component: () => import('../pages/imgs.vue'),
      meta: {
        level: 'normal',
        title: '图片管理',
        icon: 'file-image'
      }
    },
    {
      path: '/system/financial',
      component: () => import('../pages/financial.vue'),
      meta: {
        level: 'root',
        title: '财务报表',
        icon: 'transaction'
      }
    },
    {
      path: '/system/orders',
      component: () => import('../pages/orders.vue'),
      meta: {
        level: 'root',
        title: '订单管理',
        icon: 'unordered-list'
      }
    }
  ]
}

export default dynamicRoutes