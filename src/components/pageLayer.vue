<template>
  <div class="menu">
    <a-menu
      :default-selected-keys="['1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="unordered-list" />
        <span>订单列表</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="shop" />
        <span>商品列表</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="team" />
        <span>用户列表</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="inbox" />
        <span>图片管理</span>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="transaction" />
        <span>财务报表</span>
      </a-menu-item>
    </a-menu>
    <div class="toggle" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },

  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style>
.menu {
  width: 256px;
  white-space: nowrap;
  display: flex;
  height: 100%;
}

.ant-menu {
  height: 100%;
}

.toggle {
  position: relative;
  background-color: rgba(128, 128, 128, 0.2);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.toggle:hover {
  background-color: rgba(128, 128, 128, 0.3);
}
</style>