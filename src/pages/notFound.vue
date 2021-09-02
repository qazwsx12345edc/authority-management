<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <div style="font-size: 20px">没有找到你想要的页面</div>
    <div style="margin-bottom: 40px; font-size: 80px">╮(╯▽╰)╭</div>
    <a-button type="primary" @click="onClickMoveToLogin">{{ btnMsg }}</a-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "not-found",
  methods: {
    onClickMoveToLogin() {
      if (this.userAuthority) {
        this.$router.push("/system");
      } else {
        this.$router.push("/login");
      }
    },
  },

  computed: {
    ...mapGetters(["userAuthority"]),

    btnMsg() {
      if (this.userAuthority) {
        return "点击返回首页";
      } else {
        return "点击前往登录页面";
      }
    },
  },
};
</script>

<style>
.not-found {
  height: 100%;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
}
</style>