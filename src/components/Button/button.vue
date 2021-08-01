<template>
  <button 
    class="mhz-button"
    :class="[
      type ? 'mhz-button--' + type : ''
    ]"
    >
    ssss
  </button>
</template>

<script>
export default {
  name: 'mButton',
  props: {
    type: String
  },
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