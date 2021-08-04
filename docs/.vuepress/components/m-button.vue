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
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <pre><code class="vue">{{codeStr1}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h3>不同大小</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-button size="small">small</m-button>
        <m-button size="normal">normal</m-button>
        <m-button size="big">big</m-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <pre><code class="vue">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    
    <h3>设置图标、loading</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-button type="success" iconColor="red" :loading="true" icon="jiazai">success</m-button>
        <m-button type="success" disabled iconColor="red" :loading="true" icon="jiazai">success</m-button>
        <m-button type="warning" icon="aixin" iconColor="red">warning</m-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <pre><code class="vue">{{codeStr3}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import btn from '../../../src/components/Button/main/button.vue'
import mixin from '../mixin'
export default {
  props: {},
  mixins: [mixin],
  components: {
    mButton: btn
  },
  data() {
    return {
      codeStr1: `
      <m-button>default</m-button>
      <m-button type="info">info</m-button>
      <m-button type="success">success</m-button>
      <m-button type="warning">warning</m-button>
      <m-button type="danger">danger</m-button>
      <m-button disabled>disabled</m-button>
        `.replace(/^s*/gm, '').trim(),
      codeStr2: `
        <m-button size="small">small</m-button>
        <m-button size="normal">normal</m-button>
        <m-button size="big">big</m-button>
        `.replace(/^s*/gm, '').trim(),
      codeStr3: `
        <m-button type="success" iconColor="red" :loading="true" icon="jiazai">success</m-button>
        <m-button type="success" disabled iconColor="red" :loading="true" icon="jiazai">success</m-button>
        <m-button type="warning" icon="aixin" iconColor="red">warning</m-button>
        `.replace(/^s*/gm, '').trim(),
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
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