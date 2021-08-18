<template>
  <div class="m-step">
    <h3>基础使用</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-steps :current="2">
          <m-step>
            <template slot="title">
              HTML
            </template>
            <template slot="sub-title">
              超文本标记语言
            </template>
            <template slot="description">
              是一种用于创建网页的标准标记语言
            </template>
          </m-step>

          <m-step title="CSS" description=" 样式定义如何显示HTML 元素"></m-step>
          <m-step title="Vue" description="是一套用于构建用户界面的渐进式框架"></m-step>

        </m-steps>
      </div>
      <code-panel :code="codeStr1"></code-panel>
    </div>

    <h3>自定义 icon</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-steps :current="0">
          <m-step title="爱你">
            <m-icon slot="icon" name="aixin"></m-icon>
          </m-step>
          <m-step title="篮球">
            <m-icon slot="icon" name="lanqiu"></m-icon>
          </m-step>
          <m-step title="微信">
            <m-icon slot="icon" name="weixin"></m-icon>
          </m-step>
        </m-steps>
      </div>
      <code-panel :code="codeStr2"></code-panel>
    </div>

    <h3>切换</h3>

    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <m-steps :current="current">
          <m-step v-for="item in steps" :key="item.title" :title="item.title"></m-step>
        </m-steps>
        <div class="step-content">
          {{ steps[current].content }}
        </div>
        <m-button v-if="current < steps.length - 1" type="info" @click="next">next</m-button>
        <m-button v-if="current == steps.length - 1" type="info" @click="done">done</m-button>
        <m-button v-if="current > 0" type="info" @click="prev">prev</m-button>
      </div>
      <code-panel :code="codeStr3"></code-panel>
    </div>

  </div>
</template>

<script>
import mSteps from '../../../src/components/Step/main/steps.vue'
import mStep from '../../../src/components/Step/main/step.vue'
import mIcon from '../../../src/components/Icon/main/icon.vue'
import mButton from '../../../src/components/Button/main/button.vue'
import message from '../../../src/components/Message/main/message.js'
import CodePanel from './code-panel.vue'
import mixin from '../mixin'
export default {
  name: 'mhz-rate',
  props: {},
  mixins: [mixin],
  components: {
    mIcon,
    mSteps,
    mStep,
    mButton,
    CodePanel
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: 'HTML',
          content: '是一种用于创建网页的标准标记语言',
        },
        {
          title: 'CSS',
          content: '样式定义如何显示HTML 元素',
        },
        {
          title: 'Vue',
          content: '是一套用于构建用户界面的渐进式框架',
        },
      ],
      codeStr1: `
        /* code */
        <template>
          <m-steps :current="2">
            <m-step>
              <template slot="title">
                HTML
              </template>
              <template slot="sub-title">
                超文本标记语言
              </template>
              <template slot="description">
                是一种用于创建网页的标准标记语言
              </template>
            </m-step>
            <m-step title="CSS" description=" 样式定义如何显示HTML 元素"></m-step>
            <m-step title="Vue" description="是一套用于构建用户界面的渐进式框架"></m-step>
          <m-steps>
        </template>
      `.replace(/^s*/gm, '').trim(),
      codeStr2: `
        /* code */
        <template>
          <m-steps :current="0">
            <m-step title="爱你">
              <m-icon slot="icon" name="aixin"></m-icon>
            </m-step>
            <m-step title="篮球">
              <m-icon slot="icon" name="lanqiu"></m-icon>
            </m-step>
            <m-step title="微信">
              <m-icon slot="icon" name="weixin"></m-icon>
            </m-step>
          </m-steps>
        </template>
      `.replace(/^s*/gm, '').trim(),
      codeStr3: `
        /* code */
        <template>
          <m-steps :current="current">
            <m-step v-for="item in steps" :key="item.title" :title="item.title"></m-step>
          </m-steps>
          <div class="step-content">
            {{ steps[current].content }}
          </div>
          <m-button v-if="current < steps.length - 1" type="info" @click="next">next</m-button>
          <m-button v-if="current == steps.length - 1" type="info" @click="done">done</m-button>
          <m-button v-if="current > 0" type="info" @click="prev">prev</m-button>
        </template>
        <script>
        export default {
          data() {
            return {
              current: 0,
              steps: [
                {
                  title: 'HTML',
                  content: '是一种用于创建网页的标准标记语言',
                },
                {
                  title: 'CSS',
                  content: '样式定义如何显示HTML 元素',
                },
                {
                  title: 'Vue',
                  content: '是一套用于构建用户界面的渐进式框架',
                },
              ],
            }
          },
          methods: {
            done() {
              message.success({
                content: '完成了! 宝贝！！！'
              })
            },
            next() {
              this.current++;
            },
            prev() {
              this.current--;
            },
          },
        }
      <\/script>
      `.replace(/^s*/gm, '').trim(),
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
  },
  methods: {
    done() {
      message.success({
        content: '完成了! 宝贝！！！'
      })
    },
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
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

button{
  margin-right: 20px;
}

.step-content{
  height: 100px;
  line-height: 100px;
  margin: 20px 0;
  text-align: center;
  background-color: rgba(0,0,0,.05);
}
</style>