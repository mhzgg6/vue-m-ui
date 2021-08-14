<template>
  <div class="mhz-steps">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "mSteps",
  props: {
    current: {
      type: Number,
      default: 0
    },
    status: {
      type: String
    }
  },
  provide() {
    return {
      steps: this
    }
  },
  data () {
    return {
    };
  },
  created() {
  },
  mounted() {
    // console.log(this.$children);
  }
}
</script>
<style lang="scss" scoped>
</style>