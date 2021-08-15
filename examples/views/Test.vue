<template>
  <div>
    <h1>组件 1111</h1>
    <slot name="icon" :data="msg"></slot>
  </div>
</template>
<script>
export default {
  name: "component_name",
  data () {
    return {
      msg: {
        text: 'ssss'
      }
    };
  }
}
</script>
<style scoped>
</style>