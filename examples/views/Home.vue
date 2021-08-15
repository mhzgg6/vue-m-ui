<template>
  <div class="wrapper">

    <m-steps :current="currentIndex">
      <m-step>
        <m-icon slot="icon" name="aixin"></m-icon>
        <template slot="title">
          我是title
        </template>
        <template slot="sub-title">
          我是title
        </template>
        <template slot="description">
          我是描述1111
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

      <m-step title="this is title" description="this is description"></m-step>

      <m-step>
        <template slot="title">
          我是title
        </template>
        <template slot="description">
          我是title我是title我是title我是title我是title我是title我是title我是title我是title我是title
          我是title我是title我是title我是title我是title我是title我是title我是title我是title我是title
        </template>
      </m-step>
    </m-steps>

    <m-steps :current="currentIndex">

      <m-step title="this is title" description="this is description">
        <m-icon slot="icon" name="aixin"></m-icon>
      </m-step>
      <m-step title="this is title" description="this is description">
        <m-icon slot="icon" name="lanqiu"></m-icon>
      </m-step>
      <m-step title="this is title" description="this is description">
        <m-icon slot="icon" name="jiazai"></m-icon>
      </m-step>
    </m-steps>

    <m-button @click="currentIndex ++">佳佳</m-button>
    <m-button @click="currentIndex --">减法</m-button>


    <div>
      <test-a>
        <test-b slot="icon">
        </test-b>
      </test-a>
    </div>
  </div>
</template>

<script>
import mSteps from '../../src/components/Step/main/steps.vue'
import mStep from '../../src/components/Step/main/step.vue'

import TestA from './Test.vue'
import TestB from './Test2.vue'
export default {
  props: {},
  components: { mSteps, mStep, TestA, TestB },
  data() {
    return {
      currentIndex: 1,
      msg: {
        text: '测水水水水'
      }
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
.wrapper{
  padding: 20px;
  .mhz-steps{
    margin: 20px 0;
  }
}
</style>