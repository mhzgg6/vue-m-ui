<template>
  <div>
    <template slot-scope="data">
      <div>
        {{data.text}}
      </div>
    </template>
    <h1>TEst 222组件</h1>
  </div>
</template>
<script>
export default {
  name: "component_name",
  data () {
    return {
      
    };
  },
  mounted() {
    console.log(this.data);
  }
}
</script>
<style scoped>
</style>