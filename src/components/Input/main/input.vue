<template>
  <div class="mhz-input">
    <nav class="mhz-input__beforeicon" v-if="beforeIcon">
      <m-icon
        :name="beforeIcon"
        :color="iconColor"
        >
      </m-icon>
    </nav>
    <input 
      class="mhz-input__inner"
      :class="[
        sizeType,
        {
          'is-before-icon': beforeIcon, 
          'is-after-icon': afterIcon, 
          'is-readonly': readonly,
          'is-disabled': disabled
        }
      ]"
      type="text"
      :readonly="readonly"
      :disabled="disabled"
      :value="currentValue"
      :placeholder="placeholder"
      @input="handleInput"
    />
    <nav class="mhz-input__aftericon" v-if="afterIcon">
      <m-icon
        :name="afterIcon"
        :color="iconColor"
        >
      </m-icon>
    </nav>
  </div>
</template>

<script>
import mIcon from '../../Icon/main/icon.vue'

export default {
  name: 'mInput',
  props: {
    value: [String, Number],
    size: String,
    readonly: Boolean,
    disabled: Boolean,
    placeholder: [String, Number],
    beforeIcon: String, //  前置图标
    afterIcon: String, //  后置图标
    iconColor: String
  },
  components: { mIcon },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  computed: {
    sizeType() {
      const sizeList = ['small', 'normal', 'big'];
      if (sizeList.includes(this.size)) return 'size-' + this.size;
      return 'size-normal';
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.currentValue = value;
      this.$emit('input', value);
    }
  },
};
</script>