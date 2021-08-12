<template>
  <div class="wrapper">
    <h1>Timeline</h1>
    <div>
      <h3>基础用法</h3>
      <timeline>
        <timeline-item>
          我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
          我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
          我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
          我是内容
        </timeline-item>
        <timeline-item>我是内容</timeline-item>
        <timeline-item>
          <p>2021</p>
          <p>vue-m-ui</p>
        </timeline-item>
        <timeline-item>我是内容</timeline-item>
      </timeline>

      <h3>不同颜色</h3>
      <timeline>
        <timeline-item type="success">
          我是内容
        </timeline-item>
        <timeline-item type="warning">我是内容</timeline-item>
        <timeline-item type="danger">
          <p>2021</p>
          <p>vue-m-ui</p>
        </timeline-item>
        <timeline-item>
          我是内容
        </timeline-item>
        <timeline-item>
          我是内容
        </timeline-item>
      </timeline>

      <h3>自定义图标</h3>
      <timeline>
        <timeline-item>
          我是内容
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="lanqiu" :span="true"></m-icon>
          我是内容
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="aixin" color="red"></m-icon>
          <p>2021</p>
          <p>vue-m-ui</p>
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="shizhong"></m-icon>
          我是内容
        </timeline-item>
        <timeline-item>
          我是内容
        </timeline-item>
      </timeline>

      <h3>不同位置</h3>
      <timeline mode="center">
        <timeline-item>
          我是内容
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="lanqiu" :span="true"></m-icon>
          我是内容
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="aixin" color="red"></m-icon>
          <p>2021</p>
          <p>vue-m-ui</p>
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="shizhong"></m-icon>
          我是内容
        </timeline-item>
        <timeline-item>
          我是内容
        </timeline-item>
      </timeline>
      
      <timeline mode="right">
        <timeline-item>
          我是内容
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="lanqiu" :span="true"></m-icon>
          我是内容
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="aixin" color="red"></m-icon>
          <p>2021</p>
          <p>vue-m-ui</p>
        </timeline-item>
        <timeline-item>
          <m-icon slot="icon" name="shizhong"></m-icon>
          我是内容
        </timeline-item>
        <timeline-item>
          我是内容
        </timeline-item>
      </timeline>

    </div>
  </div>
</template>

<script>
import Timeline from '../../src/components/Timeline/main/timeline.vue'
import TimelineItem from '../../src/components/Timeline/main/timeline-item.vue'
export default {
  props: {},
  components: { Timeline, TimelineItem },
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
  .mhz-timeline{
    margin: 20px 0;
  }
}
</style>