# 快速上手
完整引入
```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mui from '@mhzgg6/vue-m-ui'
import '@mhzgg6/vue-m-ui/lib/m-ui.css'
Vue.use(mui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```