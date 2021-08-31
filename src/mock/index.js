import Mock from 'mockjs'

Mock.setup({
  timeout: 400
})

Mock.mock("/login", () => {
  const login = {
    status: "ok",
    userAuthority: "normal",
    time: Date.now()
  }
  return login
})