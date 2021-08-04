import mMessage from './main/message.vue'

//  为组件提供 install 安装方法，供按需引入
mMessage.install = function (Vue) {
  Vue.component(mMessage.name, mMessage)
}

export default mMessage