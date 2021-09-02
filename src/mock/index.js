import Mock from 'mockjs'
const qs = require("qs")

Mock.setup({
  timeout: 400
})

Mock.mock("/login", req => {
  const login = {
    status: "ok",
    userAuthority: 3,
    time: Date.now(),
  }
  const user = qs.parse(req.body).username
  if (user === 'admin') {
    login.userAuthority = 1
  }
  return login
})