<template>
  <div class="mhz-input">

    <!-- input -->
    <template v-if="type !== 'textarea'">
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
          afterIcon && showClear ? 'is-both-icon' : 'is-after-icon',
          {
            'is-before-icon': beforeIcon, 
            'is-readonly': readonly,
            'is-disabled': disabled
          }
        ]"
        ref="input"
        :type="type"
        :readonly="readonly"
        :disabled="disabled"
        :autofocus="autofocus"
        :value="currentValue"
        :placeholder="placeholder"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
      />
      <nav class="mhz-input__aftericon" v-if="afterIcon || showClear">
        <!-- 后置图标/清除图标 同时存在 -->
        <m-icon
          v-if="showClear"
          class="mhz-input__aftericon__close"
          name="cuowu"
          style="margin-right: 5px"
          @click="clearInput"
          >
        </m-icon>
        <m-icon
          v-if="afterIcon"
          :name="afterIcon"
          :color="iconColor"
          >
        </m-icon>
      </nav>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea 
        class="mhz-input__inner"
        ref="input"
        :readonly="readonly"
        :disabled="disabled"
        :autofocus="autofocus"
        :value="currentValue"
        :placeholder="placeholder"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
        >
      </textarea>
    </template>

  </div>
</template>

<script>
/**
 *  ToDo
 *    textarea auotsize 
 */
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
    iconColor: String, //  icon 颜色
    allowClear: Boolean,
    autofocus: Boolean,
    autosize: [Boolean, Object],
    type: {
      type: String,
      default: 'text'
    }
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
    },
    showClear() {
      if (
        this.allowClear &&
        !this.disabled &&
        !this.readonly &&
        this.currentValue !== '' 
      ) {
        return true
      }
      return false;
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('input', value);
    },
    handleFocus(event) {
      this.$emit('focus', event.target.value);
    },
    handleBlur(event) {
      this.$emit('blur', event.target.value);
    },
    handleChange(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('change', event.target.value);
    },
    clearInput() {
      this.currentValue = '';
      this.$emit('input', '');
      this.$refs.input.focus();
    }
  },
};
</script>