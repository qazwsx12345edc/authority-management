<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <div style=" font-size:20px">没有找到你想要的页面</div>
    <div style="margin-bottom:40px; font-size:80px">╮(╯▽╰)╭</div>
    <a-button type="primary" @click="onClickMoveToLogin">点击前往登陆页面</a-button>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  methods:{
    onClickMoveToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.not-found {
  height: 100%;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
}
</style>