import mTimeline from './main/timeline.vue'
import mTimelineItem from './main/timeline-item.vue'

//  为组件提供 install 安装方法，供按需引入
mTimeline.install = function (Vue) {
  Vue.component(mTimeline.name, mTimeline)
}
mTimeline.Item = mTimelineItem

export default mTimeline