<template>
  <div class="login_wrapper">
    <div class="login_box">
      <div class="img_box">
        <img src="../assets/logo.png" />
      </div>
      <div class="input_container">
        <div class="input_item">
          <a-input type="input" v-model="username" placeholder="输入账号">
            <template #prefix>
              <a-icon type="user"></a-icon>
            </template>
          </a-input>
        </div>
        <div class="input_item">
          <a-input type="password" v-model="password" placeholder="输入密码">
            <template #prefix>
              <a-icon type="key"></a-icon>
            </template>
          </a-input>
        </div>
        <div class="button_container">
          <a-button type="info" class="btn1" @click="onClickLogin"
            >登录</a-button
          >
          <a-button type="default" class="btn2" @click="refreshPassword"
            >重置</a-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { post } from "../axios/index.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    refreshPassword() {
      this.username = "";
      this.password = "";
    },

    ...mapMutations(["change_user_authority"]),

    onClickLogin() {
      const loginData = {
        username: this.username,
        password: this.password,
      };
      post("/login", loginData).then((res) => {
        console.log(res)
        if (res.status == "ok") {
          this.$message.success("login successfully");
          this.change_user_authority(res.userAuthority);
        }
      });
    },
  },

  mounted(){
    this.$router.push('/login')
  }
};
</script>

<style>
.login_wrapper {
  position: relative;
  height: 100%;
  background-color: rgb(93, 190, 138);
}
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 450px;
  border-radius: 5px;
  background-color: #fff;
}
.img_box {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.input_item {
  margin-bottom: 22px;
}
.input_container {
  position: absolute;
  bottom: 0;
  height: 186px;
  padding: 0 35px;
  left: 83px;
}

.button_container {
  position: absolute;
  right: 70px;
  height: 40px;
  width: 150px;
}
.btn1,
.btn2 {
  height: 40px;
  width: 70px;
}
.btn1 {
  margin-right: 10px;
}
</style>
