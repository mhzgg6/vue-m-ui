<template>
  <div class="m-form">
    <h3>Form</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-form ref="form" :model="formValidate" :rules="ruleValidate">
          <m-form-item label="用户名" prop="name">
            <m-input v-model="formValidate.name"></m-input>
          </m-form-item> 
          <m-form-item label="邮箱" prop="mail">
            <m-input v-model="formValidate.mail"></m-input>
          </m-form-item> 
        </m-form>

        <m-button @click="submit">提交</m-button>
        <m-button @click="reset">重置</m-button>
      </div>
      <code-panel :code="codeStr"></code-panel>
    </div>

  </div>
</template>

<script>
import mButton from '../../../src/components/Button/main/button.vue'
import mInput from '../../../src/components/Input/main/input.vue'
import mForm from '../../../src/components/Form/main/form.vue'
import mFormItem from '../../../src/components/Form/main/form-item.vue'

import CodePanel from './code-panel.vue'
import mixin from '../mixin'
export default {
  name: 'mhz-form',
  props: {},
  mixins: [mixin],
  components: {
    mButton,
    mInput,
    mForm,
    mFormItem,
    CodePanel
  },
  data() {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
      },
      codeStr: `
        /* code */
        <template>
          <div class="main">
            <h1>Form 表单</h1>
            <m-form ref="form" :model="formValidate" :rules="ruleValidate">
              <m-form-item label="用户名" prop="name">
                <m-input v-model="formValidate.name"></m-input>
              </m-form-item> 
              <m-form-item label="邮箱" prop="mail">
                <m-input v-model="formValidate.mail"></m-input>
              </m-form-item> 
            </m-form>

            <m-button @click="submit">提交</m-button>
            <m-button @click="reset">重置</m-button>
          </div>
        </template>
        <script>
          export default {
            data() {
              return {
                formValidate: {
                  name: '',
                  mail: ''
                },
                ruleValidate: {
                  name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                  ],
                  mail: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                  ],
                }
              };
            },
            methods: {
              submit() {
                // this.$refs.form.validate((valid) => {
                //   if (valid) {
                //     console.log('提交成功');
                //   } else {
                //     console.log('提交失败');
                //   }
                // })

                //  promise
                const validate = this.$refs.form.validate();
            
                validate.then((valid) => {
                  if (valid) {
                    console.log('提交成功');
                  } else {
                    console.log('提交失败');
                  }
                })
              },
              reset() {
                this.$refs.form.resetFields();
              }
            },
          };
        <\/script>
      `.replace(/^s*/gm, '').trim(),
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
  },
  methods: {
    submit() {
      // this.$refs.form.validate((valid) => {
      //   if (valid) {
      //     console.log('提交成功');
      //   } else {
      //     console.log('提交失败');
      //   }
      // })

      //  promise
      const validate = this.$refs.form.validate();
  
      validate.then((valid) => {
        if (valid) {
          console.log('提交成功');
        } else {
          console.log('提交失败');
        }
      })
    },
    reset() {
      this.$refs.form.resetFields();
    }
  },
};
</script>

<style lang="scss" scoped>
.m-form{
  .component-wrapper-demo{
    button{
      margin-top: 20px;
      margin-right: 20px;
    }
  }
}
</style>