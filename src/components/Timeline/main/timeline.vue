<template>
  <ul 
    class="mhz-timeline"
    :class="[
      { 'mhz-timeline-center': mode === 'center' },
      { 'mhz-timeline-right': mode === 'right' },
    ]"
    >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'mTimeline',
  props: {
    mode: {
      type: String,
      default: 'left'
    }
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