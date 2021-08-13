<template>
  <div class="wrapper">
    <div class="con1">
      <div class="box1">box1: 宽 200 高 200</div>
      <div class="box2">box2: 宽 400 高 100</div>
    </div>

    <!-- <div class="con2">
      <div class="box1">box1: 宽 200 高 200</div>
      <div class="box2">box2: 宽 400 高 100</div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
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
  .con1{
    margin-left: 50px;
    background: red;
    overflow: hidden;
    margin-bottom: 50px;
    // &::after{
    //   content: ""; 
    //   display: block; /* 不能少 */ 
    //   clear: left;
    // }
    .box1{
      float: left;
      width: 200px;
      height: 200px;
      background-color: pink;
    }
    .box2 {
      width: 400px;
      height: 100px;
      background: skyblue;
      clear: both;
    }
  }
  .con2{
    margin-left: 50px;
    background: red;
    .box1{
      float: left;
      width: 200px;
      height: 200px;
      background-color: pink;
    }
    .box2 {
      width: 400px;
      height: 100px;
      background: skyblue;
    }
  }
}
</style>