---
title: 'Timeline 时间轴'

---

<ClientOnly>
  <mhz-timeline></mhz-timeline>
  <font size=5>Timeline</font>
  | 参数| 说明 | 类型 | 可选值 | 默认值 |
  | :------ | ------ | ------ | ------ | ------ |
  | mode | 通过设置 mode 可以改变时间轴和内容的相对位置 | string | left center right | left |
  <font size=5>Timeline.Item</font>
  | 参数| 说明 | 类型 | 可选值 | 默认值 |
  | :------ | ------ | ------ | ------ | ------ |
  | type | 指定圆圈颜色状态 | string | success warning danger | - |
  | icon | 自定义时间轴点 | slot | - | - |
</ClientOnly>