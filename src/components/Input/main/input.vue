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
          {
            'is-both-icon': afterIcon && showClear,
            'is-before-icon': beforeIcon, 
            'is-after-icon': afterIcon || showClear, 
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
import Emitter from '../../../mixins/emitter'

export default {
  name: 'mInput',
  mixins: [ Emitter ],
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
      const parentName = this.$parent.$options.name || '';
      this.currentValue = value;
      this.$emit('input', value);

      //  暂时解决方案 判断父级是否为 mFormItem 
      //  当在表单域里面 才触发
      if (parentName && parentName === 'mFormItem') {
        this.dispatch('mFormItem', 'on-form-change', value);
      }
    },
    handleFocus() {
      this.$emit('focus', this.currentValue);
    },
    handleBlur() {
      const parentName = this.$parent.$options.name || '';
      this.$emit('blur', this.currentValue);
      if (parentName && parentName === 'mFormItem') {
        this.dispatch('mFormItem', 'on-form-blur', this.currentValue);
      }
    },
    handleChange(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('change', value);
    },
    clearInput() {
      this.currentValue = '';
      this.$emit('input', '');
      this.$refs.input.focus();
    }
  },
};
</script>