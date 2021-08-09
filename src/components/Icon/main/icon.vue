<template>
  <div
    class="mhz-icon"
    :style="{
      display: 'inline-flex',
      width: iconSize,
      height: iconSize
    }"
    @click="handClick"
  >
    <svg 
      :style="{fill: iconColor}"
      :class="[
        'mhz-icon-' + name,
        {
          'icon-loading': spin,
          'is-disabled': disabled
        }
      ]"
    >
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'mIcon',
  props: {
    color: String,
    disabled: Boolean,  //  用户可以给 Boolean 值，也可以不给 不给时  默认 undefined
    spin: {// 是否有旋转动画
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number],
      default: '1em'
    },
    name: {
      type: String,
      require: true
    }
  },
  components: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {
    iconSize() {
      return typeof this.size === 'number'
        ? this.size + 'px'
        : this.size
    },
    iconColor() {
      return this.disabled
        ? '#bbbbbb'
        : this.color
    }
  },
  created() {},
  mounted() {},
  methods: {
    handClick(event) {
      this.$emit('click', event);
    }
  },
};
</script>