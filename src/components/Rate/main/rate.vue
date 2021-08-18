<template>
  <ul class="mhz-rate">
    <li 
      class="mhz-rate-item"
      v-for="rate in number" 
      :key="rate">
      <div 
        class="mhz-rate-item-container" 
        @mouseenter="enterStar"
        @mouseleave="leaveStar"
        :rate-index="rate"
        :is-checked="false"
        >
        <div class="mhz-rate-up-star">
          <m-icon name="xingxing-bian" color="#fadb14"></m-icon>
        </div>
        <div class="mhz-rate-down-star">
          <m-icon name="xingxing-bian" color="#e8e8e8"></m-icon>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import mIcon from '../../Icon/main/icon.vue'
export default {
  props: {
    value: {//  分数
      type: Number,
      default: 0
    },
    number: {// 星星数量 默认5
      type: Number,
      default: 5
    },
    totalScore: {// 总分 默认5
      type: Number,
      default: 5
    }
  },
  components: { mIcon },
  data() {
    return {

    };
  },
  watch: {},
  computed: {},
  created() {
  },
  mounted() {},
  methods: {
    enterStar(e) {
      console.log(e);
    },
    leaveStar(e) {
      console.log(e);
    }
  },
};
</script>
<style lang="scss" scoped>
// .mhz-rate{}
</style>