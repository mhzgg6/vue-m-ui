<template>
  <div class="wrapper">

    <m-steps>
      <m-step>
        <template slot="title">
          我是title
        </template>
      </m-step>
      <m-step>
        <template slot="title">
          我是title
        </template>
      </m-step>
    </m-steps>

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