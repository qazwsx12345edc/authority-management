import Vuex from 'vuex'
import Vue from 'vue'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userAuthority: null,
    availableMenu: {}
  },
  mutations: {
    change_user_authority(state, value) {
      state.userAuthority = value
    },

    add_available_menu(state, value) {
      state.availableMenu = value
    }
  },
  getters: {
    userAuthority: state => state.userAuthority,
    availableMenu: state => state.availableMenu
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