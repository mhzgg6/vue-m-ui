<template>
  <div class="m-icon">
    <h3>Icon</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        1.<m-icon name="jiazai" :spin="true"></m-icon><br />
        2.<m-icon name="lanqiu"></m-icon><br />
        3.<m-icon name="aixin"></m-icon><br />
        4.<m-icon name="z-like"></m-icon><br />
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <pre><code class="vue">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(4)" ref="xxx">
        <span class="lock-code-word">{{isShow[4] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import icon from '../../../src/components/Icon/main/icon.vue'
import mixin from '../mixin'
export default {
  props: {},
  mixins: [mixin],
  components: {
    mIcon: icon
  },
  data() {
    return {
      codeStr: `
        <m-icon name="jiazai" :spin="true"></m-icon>
        <m-icon name="lanqiu"></m-icon>
        <m-icon name="aixin"></m-icon>
        <m-icon name="z-like"></m-icon>
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