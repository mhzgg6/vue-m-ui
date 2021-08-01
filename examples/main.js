import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mui from '../src/components/index'
console.log(mui);
Vue.use(mui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
