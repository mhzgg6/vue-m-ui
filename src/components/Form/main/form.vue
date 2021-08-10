<template>
  <form class="mhz-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'mForm',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {//  数据对象
      type: Object 
    },
    rules: {//  验证规则
      type: Object
    }
  },
  components: {},
  data() {
    return {
      fields: []  //  缓存子组件实例
    };
  },
  watch: {},
  computed: {},
  created() {
    //  事件名称 传入子组件实例
    this.$on('on-form-item-add', field => {
      if (field) this.fields.push(field); 
    })
    this.$on('on-form-item-remove', field => {
      if (field) this.fields.splice(this.fields.indexOf(field), 1);
    })
  },
  mounted() {},
  methods: {
    resetFields() {
      this.fields.forEach(field => {
        field.resetField();
      })
    },
    //  校验全部 支持promise
    validate(callback) {
      return new Promise((resolve) => {
        let valid = true;
        let count = 0;
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              //  全部完成
              resolve(valid);
              if (typeof callback === 'function') {
                callback(valid);
              }
            }
          })
        })
      })
    }
  },
};
</script>