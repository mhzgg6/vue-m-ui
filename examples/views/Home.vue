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
      <m-step>
        <template slot="sub-title">
          我是副标题
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
          我是title我是title我是title我是title我是title我是title我是title我是title我是title我是title
          我是title我是title我是title我是title我是title我是title我是title我是title我是title我是title
        </template>
      </m-step>
    </m-steps>

    <m-button @click="currentIndex ++">佳佳</m-button>
    <m-button @click="currentIndex --">减法</m-button>
  </div>
</template>

<script>
import mSteps from '../../src/components/Step/main/steps.vue'
import mStep from '../../src/components/Step/main/step.vue'
export default {
  props: {},
  components: { mSteps, mStep },
  data() {
    return {
      currentIndex: 1
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
}
</style>