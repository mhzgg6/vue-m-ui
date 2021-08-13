import mIcon from "./Icon/index"
import mButton from "./Button/index"
import mInput from './Input/index'
import mForm from './Form/index'
import mTimeline from './Timeline/index'
import mSteps from './Step/index'
import Message from "./Message/main/message"
// import mMessage from "./Message/index"

//  总的样式
import '../styles/index.scss'
//  iconfont
import '../styles/iconfont/iconfont'

//  组建列表
const components = [
  mIcon,
  mButton,
  mInput,
  mForm,
  mTimeline,
  mSteps
  // mMessage
]
console.log(mForm);
//  定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件 那么所有的组件都会被祖册
const install = function (Vue) {
  //  判断是否安装
  if (install.installed) return
  //  遍历注册全局组件
  components.map(component => Vue.component(component.name, component))

  Vue.prototype.$Message = Message
}

//  判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  //  导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  //  以下是具体的组件列表
  mIcon,
  mButton,
  mInput,
  mForm,
  mTimeline,
  mSteps
  // mMessage
}