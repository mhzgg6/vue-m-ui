<template>
  <div class="rate">
    <h1>Rate</h1>
    <div>
      <Rate></Rate>
    </div>
  </div>
</template>

<script>
import Rate from '../../src/components/Rate/main/rate.vue'
export default {
  props: {},
  components: { Rate },
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
.rate{
  padding: 20px;
}
</style>