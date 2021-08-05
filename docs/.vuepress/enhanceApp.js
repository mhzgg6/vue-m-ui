import Vue from 'vue'

// import mui from '../../src/components/index'
import "../../src/styles/index.scss"
// import '../../src/styles/iconfont/iconfont.js'
import './public/index.scss'

// import hljs from 'highlight'
// 样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
// import 'highlight.js/styles/color-brewer.css' 
// Vue.directive('highlight',function (el) {
//     let blocks = el.querySelectorAll('pre code');
//     blocks.forEach((block)=>{
//     hljs.highlightBlock(block)
//   })
// })

export default ({
  Vue,      // VuePress 正在使用的 Vue 构造函数
  options,  // 附加到根实例的一些选项
  router    // 当前应用的路由实例
}) => {
  // ...做一些其他的应用级别的优化
  // Vue.use(mui)  
}