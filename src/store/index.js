import Vuex from 'vuex'
import Vue from 'vue'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userAuthority: null,
    availableRoutes: []
  },
  mutations: {
    change_user_authority(state, value) {
      state.userAuthority = value
    },

    add_available_routes(state, value) {
      state.availableRoutes = value
    }

  },
  getters: {
    userAuthority: state => state.userAuthority,
    availableRoutes: state => state.availableRoutes
  },
  actions: {

  },
  modules: {

  },
  plugins: [
    persistedState({ storage: window.sessionStorage })
  ],
  strict: true
})

export default store