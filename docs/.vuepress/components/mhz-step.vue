<template>
  <div class="m-step">
    <h3>基础使用</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-steps :current="1">
          <m-step>
            <m-icon slot="icon" name="aixin"></m-icon>
            <template slot="title">
              我是title
            </template>
            <template slot="sub-title">
              我是subtitle
            </template>
            <template slot="description">
              我是描述
            </template>
          </m-step>

          <m-step>
            <template slot="title">
              我是title
            </template>
            <template slot="description">
              我是描述
            </template>
          </m-step>
          
          <m-step>
            <template slot="title">
              我是title
            </template>
            <template slot="description">
              我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述
            </template>
          </m-step>
        </m-steps>
      </div>
      <code-panel :code="codeStr1"></code-panel>
    </div>

  </div>
</template>

<script>
import mSteps from '../../../src/components/Step/main/steps.vue'
import mStep from '../../../src/components/Step/main/step.vue'
// import mIcon from '../../../src/components/Icon/main/icon.vue'

import CodePanel from './code-panel.vue'
import mixin from '../mixin'
export default {
  name: 'mhz-form',
  props: {},
  mixins: [mixin],
  components: {
    // mIcon,
    mSteps,
    mStep,
    CodePanel
  },
  data() {
    return {
      codeStr1: `
        /* code */
        <template>
          <m-steps :current="1">
            <m-step>
              <m-icon slot="icon" name="aixin"></m-icon>
              <template slot="title">
                我是title
              </template>
              <template slot="sub-title">
                我是subtitle
              </template>
              <template slot="description">
                我是描述
              </template>
            </m-step>

            <m-step>
              <template slot="title">
                我是title
              </template>
              <template slot="description">
                我是描述
              </template>
            </m-step>
            
            <m-step>
              <template slot="title">
                我是title
              </template>
              <template slot="description">
                我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述我是很多描述
              </template>
            </m-step>
          </m-steps>
        </template>
      `.replace(/^s*/gm, '').trim(),
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}
ul,li,p{
  margin: 0;
}
</style>