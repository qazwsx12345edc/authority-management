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
        <a-menu-item v-for="item in routesData.children" :key="item.path">
          <a-icon :type="menuIcon(item)" />
          <span>{{ menuTitle(item) }}</span>
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
        <a-button type="danger" id="signout-btn" @click="onClickSignOut"
          >退出</a-button
        >
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
      this.$router.push(event.key);
    },

    onClickSignOut() {
      this.change_user_authority(null);
      this.change_routes_data({});
      this.$router.push("/login");
      location.reload()
    },

    menuTitle(item) {
      return item.meta.title;
    },

    menuIcon(item) {
      return item.meta.icon
    },

    ...mapMutations(["change_user_authority", "change_routes_data"]),
  },

  computed: {
    isRootUser() {
      return this.userAuthority === "root";
    },

    selectedKeys: {
      get() {
        return [this.$route.path];
      },
      set(value) {
        console.log(value);
      },
    },

    ...mapGetters(["userAuthority", "routesData"]),
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

.hide-root-item {
  display: none;
}
</style>