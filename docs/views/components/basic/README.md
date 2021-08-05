---
title: 'Basic 基础'
sidebarDepth: 2
---
## Button按钮
<ClientOnly>
  <m-button></m-button>
  <font size=5>Attributes</font>
  | 参数| 说明 | 类型 | 可选值 | 默认值 |
  | :------ | ------ | ------ | ------ | ------ |
  | type | 设置按钮类型 | string | info,success,danger,warning | - |
  | size | 设置按钮大小 | string | samll,normal,big | normal |
  | icon | 设置按钮的图标类型 | string | - | - |
  | iconColor | 设置按钮的图标颜色 | string | - | black |
  | loading | 设置按钮载入状态 | boolean | - | false |
  | disabled | 按钮失效状态 | boolean | - | false |
  | htmlType | 设置 button 原生的 type 值 | string | - | button |

  <font size=5>事件</font>
  | 事件名称| 说明 | 回调参数 | 
  | :------ | ------ | ------ | 
  | click | 点击按钮时的回调 | (event) => void |
</ClientOnly>



## Icon按钮
<ClientOnly>
  <m-icon></m-icon>

  <font size=5>Attributes</font>
  | 参数| 说明 | 类型 | 可选值 | 默认值 |
  | :------ | ------ | ------ | ------ | ------ |
  | name | iconfont 名字 | string | - | - |
  | size | svg 元素大小 | string number | - | 1em |
  | color | svg 元素填充的颜色 | string | - | black |
  | spin | 设置按钮载入状态 | boolean | - | false |
  | disabled | 按钮失效状态 | boolean | - | false |
</ClientOnly>