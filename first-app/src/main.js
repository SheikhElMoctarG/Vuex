import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import {store} from './store/store'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
