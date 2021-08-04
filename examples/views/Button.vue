<template>
  <div class="wrapper">
    <!-- <svg class="icon">
      <use xlink:href="#icon-lanqiu"></use>
    </svg> -->
    <h1>button</h1>
    <h3>不同颜色</h3>
    <m-button>default</m-button>
    <m-button type="info">info</m-button>
    <m-button type="success">success</m-button>
    <m-button type="warning">warning</m-button>
    <m-button type="danger">danger</m-button>
    <m-button disabled>disabled</m-button>
    <h3>不同大小</h3>
    <m-button size="small">small</m-button>
    <m-button size="normal">normal</m-button>
    <m-button size="big">big</m-button>
    <h3>设置图标、loading</h3>
    <m-button type="success" iconColor="red" :loading="true" icon="jiazai">success</m-button>
    <m-button type="success" disabled iconColor="red" :loading="true" icon="jiazai">success</m-button>
    <m-button type="warning" icon="aixin" iconColor="red">warning</m-button>
    <h1>Icon</h1>
    1.<m-icon name="jiazai" :spin="true"></m-icon><br />
    2.<m-icon name="lanqiu"></m-icon><br />
    3.<m-icon name="aixin"></m-icon><br />
    4.<m-icon name="z-like"></m-icon><br />
    <h1>消息提示</h1>
    <button @click="showMsg('info')">点击出现消息 info 弹框！！</button>
    <button @click="showMsg('success')">点击出现消息 success 弹框！！</button>
    <button @click="showMsg('warning')">点击出现消息 warning 弹框！！</button>
    <button @click="showMsg('danger')">点击出现消息 danger 弹框！！</button>
  </div>
</template>

<script>
export default {
  props: {},
  components: {
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  created() {
  },
  mounted() {
  },
  methods: {
    showMsg(type) {
      this.$Message[type]({
        content: '我们都是好孩子 哈哈哈哈哈哈'
      })
    }
  },
};
</script>

<style lang="scss" scoped>

.wrapper{
  button{
    margin-left: 20px;
  }
}
</style>