<template>
  <div class="m-ui">

    <h3>基础用法</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-button>default</m-button>
        <m-button type="info">info</m-button>
        <m-button type="success">success</m-button>
        <m-button type="warning">warning</m-button>
        <m-button type="danger">danger</m-button>
        <m-button disabled>disabled</m-button>
      </div>
      <code-panel :code="codeStr1"></code-panel>
    </div>

    <h3>不同大小</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-button size="small">small</m-button>
        <m-button size="normal">normal</m-button>
        <m-button size="big">big</m-button>
      </div>
      <code-panel :code="codeStr2"></code-panel>
    </div>
    
    <h3>设置图标、loading</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-button type="success" iconColor="red" :loading="true" icon="jiazai">success</m-button>
        <m-button type="success" disabled iconColor="red" :loading="true" icon="jiazai">success</m-button>
        <m-button type="warning" icon="aixin" iconColor="red">warning</m-button>
      </div>
      <code-panel :code="codeStr3"></code-panel>
    </div>

  </div>
</template>

<script>
import btn from '../../../src/components/Button/main/button.vue'
import CodePanel from './code-panel.vue'
import mixin from '../mixin'
export default {
  props: {},
  mixins: [mixin],
  components: {
    mButton: btn,
    CodePanel
  },
  data() {
    return {
      codeStr1: `
      /* code */
      <m-button>default</m-button>
      <m-button type="info">info</m-button>
      <m-button type="success">success</m-button>
      <m-button type="warning">warning</m-button>
      <m-button type="danger">danger</m-button>
      <m-button disabled>disabled</m-button>
      `.replace(/^s*/gm, '').trim(),
      codeStr2: `
        /* code */
        <m-button size="small">small</m-button>
        <m-button size="normal">normal</m-button>
        <m-button size="big">big</m-button>
        `.replace(/^s*/gm, '').trim(),
      codeStr3: `
        /* code */
        <m-button type="success" iconColor="red" :loading="true" icon="jiazai">success</m-button>
        <m-button type="success" disabled iconColor="red" :loading="true" icon="jiazai">success</m-button>
        <m-button type="warning" icon="aixin" iconColor="red">warning</m-button>
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
.m-ui{
  button{
    margin-right: 5px;
  }
}
</style>