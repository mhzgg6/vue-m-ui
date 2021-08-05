<template>
  <div>
    <div class="code-content" style="height: 0;" ref="codeContent">
      <div class="code-content-height" ref="codeContentHeight">
        <!-- <div class="code-user-desc">
          组件描述说明
        </div> -->
        <pre><code class="vue javascript">{{code}}</code></pre>
      </div>
    </div>
    <div class="lock-code">
      <span @click="showCode" class="lock-code-word">{{isShow === false ? '显示代码' : '隐藏代码'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: String,
  },
  components: {},
  data() {
    return {
      codeHeight: 0,
      isShow: false
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getCodeHeight();
    })
  },
  methods: {
    getCodeHeight() {
      this.codeHeight = this.$refs.codeContentHeight.getBoundingClientRect().height;
    },
    showCode () {
      this.$nextTick(() => {
        if (this.isShow) {
          this.$refs.codeContent.style.height = 0;
          this.isShow = false;
        } else {
          this.$refs.codeContent.style.height = this.codeHeight + 25 + 'px';
          this.isShow = true;
        }
      })
    },
  },
};
</script>
