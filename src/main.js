// 入口文件
import Vue from 'vue'
import App from './App'// 导入 APP 根组件
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // store: store 和 router一样，将我们创建的Vuex实例挂载在这个vue实例中
  components: { App },
  template: '<App/>'
})
