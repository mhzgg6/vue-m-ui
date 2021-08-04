import Vue from 'vue'

import mui from '../../src/components/index'
import "../../src/styles/index.scss"
import './public/index.scss'

// import hljs from 'highlight'
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
// import 'highlight.js/styles/color-brewer.css' 
// Vue.directive('highlight',function (el) {
//   let blocks = el.querySelectorAll('pre code');
//       blocks.forEach((block)=>{
//       hljs.highlightBlock(block)
//   })
// })

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(mui)
}