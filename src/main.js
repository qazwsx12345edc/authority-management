import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(Antd)
Vue.config.productionTip = false

import './mock/index.js'

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
