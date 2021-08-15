<template>
  <div 
    :class="[
      'mhz-step-item-' + currentStatus
    ]"
    class="mhz-step-item"
    >
    <div class="mhz-step-item-container">

      <div class="mhz-step-item-icon" :class="{ 'is-icon': $slots.icon }">
        <slot v-if="$slots.icon" name="icon" color="ICON_COLORS[currentStatus]">
        </slot>
        <template v-else>
          <span v-if="steps.current <= stepNumber">
            {{ stepNumber + 1 }}
          </span>
          <template v-if="stepNumber < steps.current">
            <m-icon name="gou" color="#409EFF"></m-icon>
          </template>
        </template>
      </div>

      <div class="mhz-step-item-content">
        <!-- title -->
        <div class="mhz-step-item-title" v-if="showTitle">
          {{ title }}
          <slot name="title"></slot>
          <div class="mhz-step-item-subtitle" v-if="showSubtitle">
            {{ subtitle }}
            <slot name="sub-title"></slot>
          </div>
        </div>
        <!-- decription -->
        <div class="mhz-step-item-description" v-if="showDescription">
          {{ description }}
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
  props: {
    title: String,
    subtitle: String,
    description: String
  },
  data () {
    return {
      ICON_COLORS : {
        finish: '#409EFF',
        active: '#409EFF',
        wait: 'rbga(0,0,0,.45)'
      }
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
    currentStatus() {
      let activeIndex = this.steps.current;
      if (activeIndex < this.stepNumber) {
        return 'wait'
      } else if (activeIndex === this.stepNumber) {
        return 'active'
      } else {
        return 'finish'
      }
    },
    showTitle() {
      return this.$slots.title || this.title
        ? true
        : false
    },
    showSubtitle() {
      return this.$slots['sub-title'] || this.subtitle
        ? true
        : false
    },
    showDescription() {
      return this.$slots.description || this.description
        ? true
        : false
    }
  },
  created() {
    console.log(this.$slots);
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>