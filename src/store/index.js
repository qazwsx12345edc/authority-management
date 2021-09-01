import Vuex from 'vuex'
import Vue from 'vue'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userAuthority: null,
    routesData: {}
  },
  mutations: {
    change_user_authority(state, value){
      state.userAuthority = value
    },

    change_routes_data(state, value) {
      state.routesData = value
    }
  },
  getters: {
    userAuthority: state => state.userAuthority,
    routesData: state => state.routesData
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