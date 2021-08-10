<template>
  <div class="wrapper">
    <h1>Form</h1>


    <!-- <svg class="icon">
      <use xlink:href="#icon-lanqiu"></use>
    </svg> -->
    <h1>input</h1>
    <h3>不同大小</h3>
    <m-input size="big" placeholder="试试水"></m-input>
    <m-input size="small" placeholder="试试水"></m-input>
    <m-input v-model="val" placeholder="试试水"></m-input>
    <div>{{val}}</div>
    <h3>前后icon   v-model</h3>
    <m-input v-model="val" placeholder="试试水" beforeIcon="aixin" iconColor='red'></m-input>
    <m-input v-model="val" placeholder="试试水" beforeIcon="aixin" afterIcon="aixin" iconColor='red'></m-input>
    <m-input v-model="val" placeholder="试试水" afterIcon="aixin"></m-input>
    <h3>只读</h3>
    <m-input v-model="val" readonly></m-input>
    <m-input v-model="val" disabled></m-input>
    <h3>清除</h3>
    <m-input value="hahah" allow-clear></m-input>
    <m-input v-model="val1" afterIcon="aixin" allow-clear></m-input>
    <div>{{val1}}</div>
    <h3>事件</h3>
    <div>{{val2}}</div>
    <m-input v-model="val2" @change="handleChange"></m-input>
    <m-input value="val2" @change="handleChange"></m-input>
    <m-input value="val2" @input="handleInput"></m-input>

    <h3>textArea</h3>
    <m-input type="textarea"></m-input>

    <h1>button</h1>
    <h3>不同颜色</h3>
    <m-button>default</m-button>
    <m-button type="info">info</m-button>
    <m-button type="success">success</m-button>
    <m-button type="warning">warning</m-button>
    <m-button type="danger">danger</m-button>
    <m-button disabled>disabled</m-button>
    <h3>不同大小</h3>
    <m-button size="small">small</m-button>
    <m-button size="normal">normal</m-button>
    <m-button size="big">big</m-button>
    <h3>设置图标、loading</h3>
    <m-button type="success" iconColor="red" :loading="true" icon="jiazai">success</m-button>
    <m-button type="success" disabled iconColor="red" :loading="true" icon="jiazai">success</m-button>
    <m-button type="warning" icon="aixin" iconColor="red">warning</m-button>

    <h1>Icon</h1>
    1.<m-icon name="jiazai" :spin="true"></m-icon><br />
    2.<m-icon name="lanqiu"></m-icon><br />
    3.<m-icon name="aixin"></m-icon><br />
    4.<m-icon name="z-like"></m-icon><br />

    <h1>消息提示</h1>
    <m-button @click="showMsg('info')">点击</m-button>
    <m-button @click="showMsg('info')">点击出现消息 info 弹框！！</m-button>
    <m-button @click="showMsg('success')">点击出现消息 success 弹框！！</m-button>
    <m-button @click="showMsg('warning')">点击出现消息 warning 弹框！！</m-button>
    <m-button @click="showMsg('danger')">点击出现消息 danger 弹框！！</m-button>
    <m-button @click="filter">ss</m-button>

  </div>
</template>

<script>
export default {
  props: {},
  components: {

  },
  data() {
    return {
      val: 'input的值',
      val1: 'input1的值',
      val2: 'input2的值',
    };
  },
  watch: {},
  computed: {},
  created() {
    
  },
  mounted() {
  },
  methods: {
    async filter() {
      let a = await this.loadData();
      console.log(a);
    },
    loadData() {
      return new Promise((resolve) => {
        resolve(2)
        console.log(1);
      })
    },
    showMsg(type) {
      this.$Message[type]({
        content: '我们都是好孩子 哈哈哈哈哈哈'
      })
    },
    handleChange(e) {
      console.log(e)
    },
    handleInput(e) {
      console.log(e)
    }
  },
};
</script>

<style lang="scss" scoped>

.wrapper{
  padding: 20px 50px;
  button{
    margin: 5px 0 5px 20px;
  }

  .mhz-input{
    margin: 20px 0;
  }
}
</style>