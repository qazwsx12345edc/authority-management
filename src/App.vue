<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dynamicRoutes from "./router/dynamicRoutes"
export default {
  name: "App",
  methods: {
    addRoutes(routesData, userAuthority) {
      let children = [];
      if (userAuthority === "root") {
        children = routesData.children;
      } else {
        children = routesData.children.filter((child) => {
          return child.meta.level === "normal";
        });
      }
      let data = JSON.parse(JSON.stringify(routesData));
      data.children = children;
      this.$router.addRoutes([data]);
      console.log(data)
    },
  },

  mounted() {
    addEventListener("onunload", () => {
      this.addRoutes(dynamicRoutes, this.userAuthority)
    })
  },

  computed: {
    ...mapGetters(["userAuthority"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  user-select: none;
}
</style>
