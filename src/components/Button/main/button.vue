<template>
  <button 
    class="mhz-button"
    :class="[
      sizeType,
      type ? 'mhz-button--' + type : '',
      shape ? 'mhz-button--' + shape : '',
      {
        'is-disabled': disabled
      }
    ]"
    :type="htmlType"
    >
    <m-icon
      v-if="icon"
      :name="icon"
      :spin="loading"
      :color="iconColor"
      :disabled="disabled"
      style="margin-right: 2px"
    >
    </m-icon>
    <slot></slot>
  </button>
</template>

<script>
import mIcon from "../../../components/Icon/main/icon.vue"
export default {
  name: 'mButton',
  props: {
    type: String,
    icon: String,
    iconColor: String,
    loading: Boolean,   //  设置加载
    htmlType: String,   //  设置 button 原生的 type 值
    shape: String,
    disabled: Boolean,
    size: {
      type: String,
      default: 'normal'
    }
  },
  components: { mIcon },
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