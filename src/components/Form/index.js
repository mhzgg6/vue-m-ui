import mForm from './main/form.vue'
import mFormItem from './main/form-item.vue'

//  为组件提供 install 安装方法，供按需引入
mForm.install = function (Vue) {
  Vue.component(mForm.name, mForm)
}
mForm.Item = mFormItem

export default mForm