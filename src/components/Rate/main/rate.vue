<template>
  <ul class="mhz-rate">
    <li 
      class="mhz-rate-item"
      v-for="(rate, index) in rates" 
      :key="index">
      <div class="mhz-rate-item-container" @mouseenter="enterStar">
        <div class="mhz-rate-up-star">
          <m-icon name="xingxing-bian" color="#fadb14"></m-icon>
        </div>
        <div class="mhz-rate-down-star">
          <m-icon name="xingxing-bian"></m-icon>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import mIcon from '../../Icon/main/icon.vue'
export default {
  props: {},
  components: { mIcon },
  data() {
    return {
      rates: [
        { name: 'rate' },
        { name: 'rate' },
        { name: 'rate' },
        { name: 'rate' },
        { name: 'rate' },
      ]
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    enterStar(e) {
      console.log(e, e.clientX);
    }
  },
};
</script>
<style lang="scss" scoped>
// .mhz-rate{}
</style>