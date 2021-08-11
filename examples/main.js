import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mui from '../src/components/index'
Vue.use(mui)

import hljs from 'highlight'
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
