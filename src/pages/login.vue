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
import { mapGetters, mapMutations } from "vuex";
import { post } from "../axios/index.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["availableMenu", "userAuthority"]),
  },
  methods: {
    refreshPassword() {
      this.username = "";
      this.password = "";
    },

    ...mapMutations(["change_user_authority", "add_available_menu"]),

    onClickLogin() {
      const loginData = {
        username: this.username,
        password: this.password,
      };
      post("/login", loginData).then((res) => {
        this.userLogin(res);
      });
    },

    userLogin(res) {
      console.log(res);
      if (res.status === "ok") {
        this.$message.success("login successfully");
        this.change_user_authority(res.userAuthority);
        this.getMenu(res.menu, res.userAuthority);
        this.addRoutes(this.availableMenu)
        this.$router.push("/system");
      }
    },

    getMenu(menu, userAuthority) {
      const children = menu.children.filter(item => {
        return item.role.indexOf(userAuthority) > -1
      })
      const availableMenu = menu
      availableMenu.children = children
      this.add_available_menu(availableMenu)
    },

    addRoutes(availableMenu) {
      const dynamicRoutes = JSON.parse(JSON.stringify(availableMenu))
      dynamicRoutes.component = this.$router.componentMapper[availableMenu.name]
      const children = []
      availableMenu.children.forEach(child => {
        const childRoute = {
          path: child.path,
          name: child.name,
          component: this.$router.componentMapper[child.name]
        }
        children.push(childRoute)
      })
      dynamicRoutes.children = children
      this.$router.addRoutes([dynamicRoutes])
    }
  },
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
