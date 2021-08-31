<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="title" ref="title">商品管理系统</div>
      <a-menu
        theme="dark"
        mode="inline"
        @select="menuItemSelected"
        v-model="selectedKeys"
      >
        <a-menu-item key="users">
          <a-icon type="team" />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="orders" :disabled="!isRootUser">
          <a-icon type="unordered-list" />
          <span>订单管理</span>
        </a-menu-item>
        <a-menu-item key="goods">
          <a-icon type="shop" />
          <span>商品管理</span>
        </a-menu-item>
        <a-menu-item key="imgs">
          <a-icon type="file-image" />
          <span>图片管理</span>
        </a-menu-item>
        <a-menu-item key="financial" :disabled="!isRootUser">
          <a-icon type="transaction" />
          <span>财务报表</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="onClickChangeCollapsed"
        />
        <a-button type="danger" id="signout-btn" @click="onClickSignOut">退出</a-button>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      collapsed: false,
      selectedKeys: ["users"],
    };
  },
  methods: {
    onClickChangeCollapsed() {
      this.collapsed = !this.collapsed;
      this.collapsed
        ? (this.$refs.title.style.fontSize = "5px")
        : (this.$refs.title.style.fontSize = "24px");
    },

    menuItemSelected(event) {
      this.$router.push("/" + event.key);
    },

    onClickSignOut(){
      this.change_user_authority(null)
      this.$message.success("sign out successfully")
    },

    ...mapMutations(["change_user_authority"])
  },

  watch: {
    $route(to) {
      this.selectedKeys = [to.path.split("/")[1]];
    },
  },

  mounted() {
    this.$router.push("/users");
  },

  computed: {
    isRootUser() {
      return this.userAuthority === "root";
    },

    ...mapGetters(["userAuthority"]),
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .title {
  height: 32px;
  margin: 16px;
  color: #fff;
  font-size: 24px;
  transition: 0.3s;
}

#components-layout-demo-custom-trigger {
  height: 100%;
}

#signout-btn {
  float: right;
  margin-top: 15px;
  margin-right: 15px;
}
</style>