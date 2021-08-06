import Input from './main/input.vue'

//  为组件提供 install 安装方法，供按需引入
Input.install = function (Vue) {
  Vue.component(Input.name, Input)
}

export default Input