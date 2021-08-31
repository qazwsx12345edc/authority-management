import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userAuthority: null,
  },
  mutations: {
    change_user_authority(state, value){
      state.userAuthority = value
    }
  },
  getters: {
    userAuthority: state => state.userAuthority,
  },
  actions: {

  },
  modules: {

  },
  strict: true
})

export default store