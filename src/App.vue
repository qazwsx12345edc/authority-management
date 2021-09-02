<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  methods: {
    addRoutes(availableMenu) {
      const dynamicRoutes = JSON.parse(JSON.stringify(availableMenu));
      dynamicRoutes.component =
        this.$router.componentMapper[availableMenu.name];
      const children = [];
      availableMenu.children.forEach((child) => {
        const childRoute = {
          path: child.path,
          name: child.name,
          component: this.$router.componentMapper[child.name],
        };
        children.push(childRoute);
      });
      dynamicRoutes.children = children;
      this.$router.addRoutes([dynamicRoutes]);
    },
  },

  computed: {
    ...mapGetters(["userAuthority", "availableMenu"]),
  },

  mounted() {
    if (this.availableMenu.name) {
      this.addRoutes(this.availableMenu)
    }
  }
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
