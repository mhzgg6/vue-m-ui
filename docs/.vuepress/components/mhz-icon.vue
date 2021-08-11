<template>
  <div class="m-icon">
    <h3></h3>
    <ul class="icon-content">
      <li v-for="(icon, index) in list" :key="index" @click="copy(icon.name)">
        <div>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-${icon.name}`"></use>
          </svg>
        </div>
        <p>{{ icon.name }}</p>
      </li>
    </ul>

    <h3>基本使用</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        1.<m-icon name="jiazai" :spin="true"></m-icon><br />
        2.<m-icon name="lanqiu"></m-icon><br />
        3.<m-icon name="aixin" color="red"></m-icon><br />
        4.<m-icon name="z-like"></m-icon><br />
      </div>
      <code-panel :code="codeStr"></code-panel>
    </div>

  </div>
</template>

<script>
import icon from '../../../src/components/Icon/main/icon.vue'
import message from '../../../src/components/Message/main/message.js'
import CodePanel from './code-panel.vue'
import mixin from '../mixin'
const iconList = [
  { name: 'cuowu' },
  { name: 'jinggao' },
  { name: 'zhengque' },
  { name: 'info-circle' },
  { name: 'weixin' },
  { name: 'z-like' },
  { name: 'lanqiu' },
  { name: 'aixin' },
  { name: 'jiazai' },
  { name: 'xiangshang' },
  { name: 'xiangxia' },
]

export default {
  name: 'mhz-icon',
  props: {},
  mixins: [mixin],
  components: {
    mIcon: icon,
    CodePanel
  },
  data() {
    return {
      list: iconList,
      codeStr: `
        /* code */
        <template>
          <m-icon name="jiazai" :spin="true"></m-icon>
          <m-icon name="lanqiu"></m-icon>
          <m-icon name="aixin" color="red"></m-icon>
          <m-icon name="z-like"></m-icon>
        </template>
        `.replace(/^s*/gm, '').trim(),
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
  },
  methods: {
    copy(name) {
      message.success({
        content: `<m-icon name="${name}" />  copied`
      })
    }
  },
};
</script>

<style lang="scss" scoped>
ul,li,p {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.icon {
  width: 2em; 
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.m-icon{
  ul{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 10px;
    li{
      width: 16.66%;
      text-align: center;
      cursor: pointer;
      height: 100px;
      color: #555;
      transition: color .3s ease-in-out,background-color .3s ease-in-out;
      margin: 3px 0;
      border-radius: 4px;
      background-color: #fff;
      overflow: hidden;
      padding: 10px 0 0;

      &:hover{
        background-color: #1890ff;
        color: #fff;
      }
    }
  }
}
</style>