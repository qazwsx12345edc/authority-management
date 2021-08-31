<template>
  <div id="app">
    <PageLayer v-if="userAuthority" />
    <Login v-if="!userAuthority" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageLayer from "./components/pageLayer.vue";
import Login from "./pages/login.vue";
export default {
  name: "App",
  components: {
    PageLayer,
    Login,
  },

  computed: {
    ...mapGetters(["userAuthority"]),
  },

  mounted() {
    this.$router.push("/login");

    const store = this.$store;
    if (sessionStorage.getItem("store")) {
      const s = sessionStorage.getItem("store");
      store.replaceState(Object.assign({}, store.state, JSON.parse(s)));
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(store.state));
    });
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
