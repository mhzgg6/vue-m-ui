<template>
  <div class="wrapper">
    <h3>Message</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-button type="info" @click="showMsg('info')">info</m-button>
        <m-button type="success" @click="showMsg('success')">success</m-button>
        <m-button type="warning" @click="showMsg('warning')">warning</m-button>
        <m-button type="danger" @click="showMsg('danger')">danger</m-button>
      </div>
      <code-panel :code="codeStr"></code-panel>
    </div>
  </div>
</template>

<script>
import btn from '../../../src/components/Button/main/button.vue'
import message from '../../../src/components/Message/main/message.js'
import mixin from '../mixin'
export default {
  mixins: [mixin],
  props: {},
  components: {
    mButton: btn
  },
  data() {
    return {
      codeStr:`
      /* code */
      <m-button type="info" @click="info">info</m-button>
      <m-button type="success" @click="success">success</m-button>
      <m-button type="warning" @click="warning">warning</m-button>
      <m-button type="danger" @click="danger">danger</m-button>
      `.replace(/^s*/gm, '').trim()
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
  },
  methods: {
    showMsg(type) {
      message[type]({
        content: '将近的晚风快吹干整条小巷 燃尽的灯光无法再将我们点亮'
      })
    }
  },
};
</script>