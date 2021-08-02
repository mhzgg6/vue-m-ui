<template>
  <div class="wrapper">
    <h1>不同颜色</h1>
    <m-button>default</m-button>
    <m-button type="info">info</m-button>
    <m-button type="success">success</m-button>
    <m-button type="warning">warning</m-button>
    <m-button type="danger">danger</m-button>
    <m-button disabled>disabled</m-button>
    <h1>不同大小</h1>
    <m-button size="small">small</m-button>
    <m-button size="normal">normal</m-button>
    <m-button size="big">big</m-button>
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
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>

.wrapper{
  button{
    margin-left: 20px;
  }
}
</style>