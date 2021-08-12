<template>
  <div class="m-timeline">
    <h3>基础使用</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-timeline>
          <m-timeline-item>将近的晚风快吹干整条小巷</m-timeline-item>
          <m-timeline-item>燃尽的灯光无法再将我们点亮</m-timeline-item>
          <m-timeline-item>
            <p>要明白有些事情不能总靠想象</p>
            <p>大不了今晚继续喝到明天早上</p>
          </m-timeline-item>
          <m-timeline-item>看不到希望的人还在自言自语说着</m-timeline-item>
        </m-timeline>
      </div>
      <code-panel :code="codeStr1"></code-panel>
    </div>

    <h3>不同颜色</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-timeline>
          <m-timeline-item type="success">抱怨得不到温暖的人还在继续作着</m-timeline-item>
          <m-timeline-item type="warning">他对着电话那头说着自己过得很好</m-timeline-item>
          <m-timeline-item type="danger">
            <p>挂断之后他又在被子里面偷偷哭了</p>
            <p>不存在一帆风顺</p>
            <p>偶尔也会去疯混</p>
          </m-timeline-item>
          <m-timeline-item>
            尽管有好多人讨论着你是什么门货
          </m-timeline-item>
        </m-timeline>
      </div>
      <code-panel :code="codeStr2"></code-panel>
    </div>

    <h3>自定义图标</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-timeline>
          <m-timeline-item type="success">慢慢也有了分寸</m-timeline-item>
          <m-timeline-item>
            <m-icon slot="icon" name="aixin" color="red"></m-icon>
            不屑于那些争论
          </m-timeline-item>
          <m-timeline-item >
            <m-icon slot="icon" name="shizhong" color="red"></m-icon>
            <p>所以我大多数的时候都会选择沉默</p>
            <p>付出的一切难免最后都会化为落尘</p>
          </m-timeline-item>
          <m-timeline-item>
            <m-icon slot="icon" name="zhengque" color="green"></m-icon>
            就算整个世界空绝就剩我独自一人
          </m-timeline-item>
        </m-timeline>
      </div>
      <code-panel :code="codeStr3"></code-panel>
    </div>

    <h3>不同位置</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-timeline mode='center'>
          <m-timeline-item type="success">一个人漫无目的 迷失在晚风里</m-timeline-item>
          <m-timeline-item>
            <m-icon slot="icon" name="aixin" color="red"></m-icon>
            我知道后会无期 但也不能逃避
          </m-timeline-item>
          <m-timeline-item >
            <m-icon slot="icon" name="shizhong" color="red"></m-icon>
            <p>迷惘的日子里 感谢能遇见你</p>
            <p>究竟还要经历多少荆棘</p>
            <p>也许该为我的选择庆幸</p>
          </m-timeline-item>
          <m-timeline-item>
            <m-icon slot="icon" name="zhengque" color="green"></m-icon>
            <p>人活着到底为了什么东西</p>
            <p>忙碌可能为了一张到老</p>
            <p>也不够还清的账单</p>
          </m-timeline-item>
        </m-timeline>
      </div>
      <code-panel :code="codeStr4"></code-panel>
    </div>

  </div>
</template>

<script>
import mTimeline from '../../../src/components/Timeline/main/timeline.vue'
import mTimelineItem from '../../../src/components/Timeline/main/timeline-item.vue'
import mIcon from '../../../src/components/Icon/main/icon.vue'

import CodePanel from './code-panel.vue'
import mixin from '../mixin'
export default {
  name: 'mhz-form',
  props: {},
  mixins: [mixin],
  components: {
    mIcon,
    mTimeline,
    mTimelineItem,
    CodePanel
  },
  data() {
    return {
      codeStr1: `
        /* code */
        <template>
          <m-timeline>
            <m-timeline-item>将近的晚风快吹干整条小巷</m-timeline-item>
            <m-timeline-item>燃尽的灯光无法再将我们点亮</m-timeline-item>
            <m-timeline-item>
              <p>要明白有些事情不能总靠想象</p>
              <p>大不了今晚继续喝到明天早上</p>
            </m-timeline-item>
            <m-timeline-item>看不到希望的人还在自言自语说着</m-timeline-item>
          </m-timeline>
        </template>
      `.replace(/^s*/gm, '').trim(),
      codeStr2: `
        /* code */
        <template>
          <m-timeline>
            <m-timeline-item type="success">抱怨得不到温暖的人还在继续作着</m-timeline-item>
            <m-timeline-item type="warning">他对着电话那头说着自己过得很好</m-timeline-item>
            <m-timeline-item type="danger">
              <p>挂断之后他又在被子里面偷偷哭了</p>
              <p>不存在一帆风顺</p>
              <p>偶尔也会去疯混</p>
            </m-timeline-item>
            <m-timeline-item>
              尽管有好多人讨论着你是什么门货
            </m-timeline-item>
          </m-timeline>
        </template>
      `.replace(/^s*/gm, '').trim(),
      codeStr3: `
        /* code */
        <template>
          <m-timeline>
            <m-timeline-item type="success">慢慢也有了分寸</m-timeline-item>
            <m-timeline-item>
              <m-icon slot="icon" name="aixin" color="red"></m-icon>
              不屑于那些争论
            </m-timeline-item>
            <m-timeline-item >
              <m-icon slot="icon" name="shizhong" color="red"></m-icon>
              <p>所以我大多数的时候都会选择沉默</p>
              <p>付出的一切难免最后都会化为落尘</p>
            </m-timeline-item>
            <m-timeline-item>
              <m-icon slot="icon" name="zhengque" color="green"></m-icon>
              就算整个世界空绝就剩我独自一人
            </m-timeline-item>
          </m-timeline>
        </template>
      `.replace(/^s*/gm, '').trim(),
      codeStr4: `
        /* code */
        <template>
          <m-timeline mode='center'>
            <m-timeline-item type="success">一个人漫无目的 迷失在晚风里</m-timeline-item>
            <m-timeline-item>
              <m-icon slot="icon" name="aixin" color="red"></m-icon>
              我知道后会无期 但也不能逃避
            </m-timeline-item>
            <m-timeline-item >
              <m-icon slot="icon" name="shizhong" color="red"></m-icon>
              <p>迷惘的日子里 感谢能遇见你</p>
              <p>究竟还要经历多少荆棘</p>
              <p>也许该为我的选择庆幸</p>
            </m-timeline-item>
            <m-timeline-item>
              <m-icon slot="icon" name="zhengque" color="green"></m-icon>
              <p>人活着到底为了什么东西</p>
              <p>忙碌可能为了一张到老</p>
              <p>也不够还清的账单</p>
            </m-timeline-item>
          </m-timeline>
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
  },
};
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}
ul,li,p{
  margin: 0;
}
</style>