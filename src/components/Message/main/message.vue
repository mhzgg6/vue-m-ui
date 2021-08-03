<template>
  <div 
    class="mhz-message"
    >
    <div class="message-main" v-for="item in msgList" :key="item.name">
      <div class="message-content">
        {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>
let seed = 0;
function getUuid() {
  return 'alert' + (seed ++);
}

export default {
  props: {},
  components: {},
  data() {
    return {
      msgList: []
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    add(msg) {
      const name = getUuid();
      let _msg = Object.assign({
        name
      }, msg)

      this.msgList.push(_msg);

      //  定时移除
      const duration = msg.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration * 1000)
    },
    remove(name) {
      const msgList = this.msgList;

      for(let i = 0; i < msgList.length; i ++) {
        if (msgList[i].name === name) {
          this.msgList.splice(i, 1);
          break;
        }
      }
    }
  },
};
</script>