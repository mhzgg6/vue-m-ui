import mSteps from './main/steps.vue'
import mStepsItem from './main/step.vue'

//  为组件提供 install 安装方法，供按需引入
mSteps.install = function (Vue) {
  Vue.component(mSteps.name, mSteps)
}
mSteps.Item = mStepsItem

export default mSteps