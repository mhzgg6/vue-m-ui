<template>
  <div class="mhz-step-item">
    <div class="mhz-step-item-container">
      <div class="mhz-step-item-icon">
        
      </div>
      <div class="mhz-step-item-content">
        <slot name="title"></slot>
        <slot name="sub-title"></slot>
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mStep",
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
</style>