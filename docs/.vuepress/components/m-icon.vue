<template>
  <div class="m-icon">
    <h3>Icon</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        1.<m-icon name="jiazai" :spin="true"></m-icon><br />
        2.<m-icon name="lanqiu"></m-icon><br />
        3.<m-icon name="aixin" color="red"></m-icon><br />
        4.<m-icon name="z-like"></m-icon><br />
      </div>
      <code-panel :code="codeStr"></code-panel>
    </div>

  </div>
</template>

<script>
import icon from '../../../src/components/Icon/main/icon.vue'
import CodePanel from './code-panel.vue'
import mixin from '../mixin'
export default {
  props: {},
  mixins: [mixin],
  components: {
    mIcon: icon,
    CodePanel
  },
  data() {
    return {
      codeStr: `
        /* code */
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
  mounted() {
  },
  methods: {},
};
</script>