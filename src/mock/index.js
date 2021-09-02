import Mock from 'mockjs'
const qs = require("qs")

Mock.setup({
  timeout: 400
})

const menu = {
  name: 'system',
  path:'/system',
  redirect:'/system/users',
  children: [
    {
      path: '/system/users',
      name: 'users',
      title: '用户管理',
      icon: 'team',
      role: [1, 2, 3]
    },
    {
      path: '/system/goods',
      name: 'goods',
      title: '商品管理',
      icon: 'shop',
      role: [1, 2, 3],
    },
    {
      path: '/system/imgs',
      name: 'imgs',
      title: '图片管理',
      icon: 'file-image',
      role: [1, 2, 3]
    },
    {
      path: '/system/financial',
      name: 'financial',
      title: '财务报表',
      icon: 'transaction',
      role: [1]
    },
    {
      path: '/system/orders',
      name: 'orders',
      title: '订单管理',
      icon: 'unordered-list',
      role: [1]
    }
  ]
}

Mock.mock("/login", req => {
  const login = {
    status: "ok",
    userAuthority: 3,
    time: Date.now(),
    menu: menu
  }
  const user = qs.parse(req.body).username
  if (user === 'admin') {
    login.userAuthority = 1
  }
  return login
})