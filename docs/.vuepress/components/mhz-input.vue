<template>
  <div class="m-input">
    <h3>基本使用</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-input placeholder="Basic usage"></m-input>
      </div>
      <code-panel :code="codeStr1"></code-panel>
    </div>

    <h3>数据双向绑定</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-input v-model="val" placeholder="Basic usage"></m-input>
        <div style="margin: 10px 0">绑定的值：{{ val }}</div>
      </div>
      <code-panel :code="codeStr2"></code-panel>
    </div>

    <h3>添加 Icon</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
          <m-input placeholder="Add Icon" beforeIcon="aixin" iconColor='red'></m-input>
          <m-input placeholder="Add Icon" beforeIcon="aixin" afterIcon="aixin" iconColor='red'></m-input>
          <m-input placeholder="Add Icon" afterIcon="aixin"></m-input>
      </div>
      <code-panel :code="codeStr3"></code-panel>
    </div>

    <h3>只读/禁用/清除</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-input value="只读" readonly></m-input>
        <m-input value="禁用" disabled></m-input>
        <m-input allow-clear></m-input>
      </div>
      <code-panel :code="codeStr4"></code-panel>
    </div>

    <h3>多行文本框 textarea</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-input type="textarea"></m-input>
      </div>
      <code-panel :code="codeStr5"></code-panel>
    </div>

  </div>
</template>

<script>
import mhzInput from '../../../src/components/Input/main/input.vue'
import CodePanel from './code-panel.vue'
import mixin from '../mixin'
export default {
  name: 'mhz-input',
  props: {},
  mixins: [mixin],
  components: {
    mInput: mhzInput,
    CodePanel
  },
  data() {
    return {
      val: '',
      codeStr1: `
        /* code */
        <template>
          <m-input placeholder="Basic usage"></m-input>
        </template>
        `.replace(/^s*/gm, '').trim(),
      codeStr2: `
        /* code */
        <template>
          <m-input v-model="val" placeholder="Basic usage"></m-input>
        </template>
        `.replace(/^s*/gm, '').trim(),
      codeStr3: `
        /* code */
        <template>
          <m-input placeholder="Add Icon" beforeIcon="aixin" iconColor='red'></m-input>
          <m-input placeholder="Add Icon" beforeIcon="aixin" afterIcon="aixin" iconColor='red'></m-input>
          <m-input placeholder="Add Icon" afterIcon="aixin"></m-input>
        </template>
        `.replace(/^s*/gm, '').trim(),
      codeStr4: `
        /* code */
        <template>
          <m-input value="只读" readonly></m-input>
          <m-input value="禁用" disabled></m-input>
          <m-input allow-clear></m-input>
        </template>
        `.replace(/^s*/gm, '').trim(),
      codeStr5: `
        /* code */
        <template>
          <m-input type="textarea"></m-input>
        </template>
        `.replace(/^s*/gm, '').trim(),
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.m-input{
  .component-wrapper-demo{

    .mhz-input{
      margin-top: 20px;
    }
  }
}
</style>