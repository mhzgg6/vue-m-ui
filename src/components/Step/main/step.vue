<template>
  <div 
    :class="classStatus"
    class="mhz-step-item"
    >
    <div class="mhz-step-item-container">
      <div class="mhz-step-item-icon">
        <span v-if="steps.current <= stepNumber">
          {{stepNumber + 1}}
        </span>
        <template v-if="stepNumber < steps.current">
          <m-icon name="gou" color="#409EFF"></m-icon>
        </template>
        <!-- <slot name="icon"></slot> -->
      </div>
      <div class="mhz-step-item-content">
        <div class="mhz-step-item-title">
          <slot name="title"></slot>
          <div class="mhz-step-item-subtitle">
            <slot name="sub-title"></slot>
          </div>
        </div>
        <div class="mhz-step-item-description">
          <slot name="description"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mIcon from '../../Icon/main/icon.vue'
export default {
  name: "mStep",
  inject: ['steps'],
  data () {
    return {
    };
  },
  components: { mIcon }, 
  computed: {
    //  获取当前的步骤的 index   
    //  暂时想到的方法 Todo
    stepNumber() {
      let curIndex;
      this.steps.$children.forEach((child, index) => {
        if (child._uid === this._uid) {
          curIndex = index;
        }
      })
      return curIndex
    },
    classStatus() {
      let activeIndex = this.steps.current;
      console.log(activeIndex);
      if (activeIndex < this.stepNumber) {
        return 'mhz-step-item-wait'
      } else if (activeIndex === this.stepNumber) {
        return 'mhz-step-item-active'
      } else {
        return 'mhz-step-item-finish'
      }
    }
  },
  created() {
    // console.log(this.steps.$children[0]._uid);
    // console.log(this._uid);
    // this.steps.$slots.default.forEach((component, index) => {
    //   if (component._uid === this._uid) {

    //     console.log(index);
    //   }
    // })
    // console.log(this.steps.$slots);
    // console.log(this._uid);
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>