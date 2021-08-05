export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    import('../../src/styles/iconfont/iconfont')
    .then(icon => {})
      //主题css，可自选
    import("highlight.js/styles/paraiso-dark.css");
    import("highlight.js/lib/index.js").then(hljs => {
      hljs.highlightAll();
    });
  },
}