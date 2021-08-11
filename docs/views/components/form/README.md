---
title: 'Form 表单'

---

<ClientOnly>
  <mhz-form></mhz-form>
  <font size=5>Attributes</font>
  | 参数| 说明 | 类型 | 可选值 | 默认值 |
  | :------ | ------ | ------ | ------ | ------ |
  | model | 表单数据对象 | object | - | - |
  | rules | 表单验证规则，具体配置查看  async-validator | object | - | - |

  <font size=5>事件</font>
  | 事件名称| 说明 | 回调参数 | 
  | :------ | ------ | ------ | 
  | validate | 对整个表单进行校验 | callback |
  | resetFields | 重置表单 | - |
</ClientOnly>