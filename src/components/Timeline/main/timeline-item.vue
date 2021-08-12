<template>
  <li class="mhz-timeline-item">
    <div class="mhz-timeline-item-line"></div>
    <div 
      class="mhz-timeline-item-icon" 
      :class="[ 
        type ? `is-${type}` : '',
        { 'is-slot': this.$slots.icon } 
      ]">
      <slot name="icon"></slot>
    </div>
    <div class="mhz-timeline-item-content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'mTimelineItem',
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