<template>
  <div class="mhz-form-item">
    <div class="mhz-form-item-label">
      <label 
        v-if="label"
        :class="{ 'mhz-form-item-label-required': isRequired }"
        >
        {{ label }}
      </label>
    </div>
    <div class="mhz-form-item-wrapper">
      <slot></slot>
      <div 
        v-if="validateState === 'error'"
        class="mhz-form-item-message"
        >
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import Emitter from '../../../mixins/emitter'
import AsyncValidator from 'async-validator'

export default {
  name: 'mFormItem',
  inject: ['form'],
  mixins: [ Emitter ],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  components: {},
  data() {
    return {
      isRequired: false,  //  是否必填
      validateState: '',  // 校验状态
      validateMessage: '',  // 校验不通过时的提示信息
    };
  },
  watch: {},
  computed: {
    //  从 Form 的 model 中动态得到当前 表单组件的数据
    fieldValue() {
      return this.form.model[this.prop];
    }
  },
  created() {},
  mounted() {
    // 组件渲染时 将实例缓存在 Form 中
    // 如果没有传入 prop 则不要校验 也就无需缓存
    if (this.prop) {
      this.dispatch('mForm', 'on-form-item-add', this);
      //  设置初始值  以便在重置时恢复默认值
      this.initialValue = this.fieldValue;
      this.setRules();
    }
  },
  beforeDestroy() {
    //  组件销毁之前 将实例从 Form 的缓存中移除
    this.dispatch('mForm', 'on-form-item-remove', this);
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length) {
        rules.every(rule => {
          this.isRequired = rule.required;
        })
      }
      //  监听 input 值改变
      this.$on('on-form-blur', this.onFieldBlur);
      this.$on('on-form-change', this.onFieldChange);
    },
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(formRules || []);
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
    },
    /**
     *  校验数据
     *  @param trigger 校验类型
     *  @param callback 回调函数 
     */
    validate(trigger, callback = function () {}) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) { 
        return true 
      }

      //  设置校验状态为 校验中
      this.validateState = 'validating';

      let descriptor = {};
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      let model = {};
      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';
        callback(this.validateMessage);
      })
    },
    resetField() {
      this.validateMessage = '';
      this.validateState = '';
      this.form.model[this.prop] = this.initialValue;
    },
    onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange() {
      // console.log('input  改变了么');
      this.validate('change');
    }
  },
};
</script>