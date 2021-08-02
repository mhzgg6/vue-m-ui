<template>
  <button 
    class="mhz-button"
    :class="[
      sizeType,
      type ? 'mhz-button--' + type : '',
      {
        'is-disabled': disabled
      }
    ]"
    :type="htmlType"
    >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'mButton',
  props: {
    type: String,
    htmlType: String,   //  设置 button 原生的 type 值
    disabled: Boolean,
    size: {
      type: String,
      default: 'normal'
    }
  },
  components: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {
    sizeType() {
      const sizeList = ['small', 'normal', 'big'];
      if (sizeList.includes(this.size)) return 'size-' + this.size;
      return 'size-normal';
    }
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>