---
title: 'Input 输入框'

---

<ClientOnly>
  <mhz-input></mhz-input>
  <font size=5>Attributes</font>
  | 参数| 说明 | 类型 | 可选值 | 默认值 |
  | :------ | ------ | ------ | ------ | ------ |
  | value(v-model) | 输入框内容 | string | - | - |
  | size | 控件大小 | string | big normal small | normal |
  | readonly | 只读 | boolean | - | false |
  | disabled | 是否禁用状态 | boolean | - | false |
  | placeholder | 输入框占位文本 | string | - | - |
  | beforeIcon | 前置icon | string | - | - |
  | afterIcon | 后置icon | string | - | - |
  | iconColor | icon颜色 | string | - | black |
  | allowClear | 可以点击清除图标删除内容	 | boolean |  |  |
  | autosize | 自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 } | boolean|object | - | boolean|object |
  | type | 声明 input 类型，同原生 input 标签的 type 属性 | string | - | text |

  <font size=5>事件</font>
  | 事件名称| 说明 | 回调参数 | 
  | :------ | ------ | ------ | 
  | change | 输入框内容变化时的回调 | function(value) |
</ClientOnly>