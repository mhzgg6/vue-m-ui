(window.webpackJsonp=window.webpackJsonp||[]).push([[10,15],{311:function(e,t,n){"use strict";n(310);var i={name:"mIcon",props:{color:String,disabled:Boolean,spin:{type:Boolean,default:!1},size:{type:[String,Number],default:"1em"},name:{type:String,require:!0}},components:{},data:function(){return{}},watch:{},computed:{iconSize:function(){return"number"==typeof this.size?this.size+"px":this.size},iconColor:function(){return this.disabled?"#bbbbbb":this.color}},created:function(){},mounted:function(){},methods:{handClick:function(e){this.$emit("click",e)}}},o=n(41),a=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mhz-icon",style:{display:"inline-flex",width:e.iconSize,height:e.iconSize},on:{click:e.handClick}},[n("svg",{class:["mhz-icon-"+e.name,{"icon-loading":e.spin,"is-disabled":e.disabled}],style:{fill:e.iconColor}},[n("use",{attrs:{"xlink:href":"#icon-"+e.name}})])])}),[],!1,null,null,null);t.a=a.exports},314:function(e,t,n){"use strict";n(10),n(11),n(13);t.a={data:function(){return{}},methods:{},mounted:function(){n.e(27).then(n.t.bind(null,317,7)).then((function(e){})),Promise.all([n.e(0),n.e(28)]).then(n.t.bind(null,318,7)),n.e(2).then(n.t.bind(null,319,7)).then((function(e){e.highlightAll()}))}}},315:function(e,t,n){"use strict";n.r(t);var i={name:"code-panel",props:{code:String},components:{},data:function(){return{codeHeight:0,isShow:!1}},watch:{},computed:{},created:function(){},mounted:function(){var e=this;this.$nextTick((function(){e.getCodeHeight()}))},methods:{getCodeHeight:function(){this.codeHeight=this.$refs.codeContentHeight.getBoundingClientRect().height},showCode:function(){var e=this;this.$nextTick((function(){e.isShow?(e.$refs.codeContent.style.height=0,e.isShow=!1):(e.$refs.codeContent.style.height=e.codeHeight+25+"px",e.isShow=!0)}))}}},o=n(41),a=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"codeContent",staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{ref:"codeContentHeight",staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"vue javascript"},[e._v(e._s(e.code))])])])]),e._v(" "),n("div",{staticClass:"lock-code"},[n("span",{staticClass:"lock-code-word",on:{click:e.showCode}},[e._v(e._s(!1===e.isShow?"显示代码":"隐藏代码"))])])])}),[],!1,null,null,null);t.default=a.exports},321:function(e,t,n){"use strict";n(162);var i=n(311),o={name:"mButton",props:{type:String,icon:String,iconColor:String,loading:Boolean,htmlType:String,shape:String,disabled:Boolean,size:{type:String,default:"normal"}},components:{mIcon:i.a},data:function(){return{}},watch:{},computed:{sizeType:function(){return["small","normal","big"].includes(this.size)?"size-"+this.size:"size-normal"}},created:function(){},mounted:function(){},methods:{}},a=n(41),r=Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"mhz-button",class:[e.sizeType,e.type?"mhz-button--"+e.type:"",e.shape?"mhz-button--"+e.shape:"",{"is-disabled":e.disabled}],attrs:{type:e.htmlType},on:{click:function(t){return e.$emit("click")}}},[e.icon?n("m-icon",{staticStyle:{"margin-right":"2px"},attrs:{name:e.icon,spin:e.loading,color:e.iconColor,disabled:e.disabled}}):e._e(),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.a=r.exports},322:function(e,t,n){"use strict";n(95),n(69),n(163);function i(e,t,n){this.$children.forEach((function(o){o.$options.name===e?o.$emit.apply(o,[t].concat(n)):i.apply(o,[e,t].concat([n]))}))}t.a={methods:{dispatch:function(e,t,n){for(var i=this.$parent||this.$root,o=i.$options.name;i&&(!o||o!==e);)(i=i.$parent)&&(o=i.$options.name);i&&i.$emit.apply(i,[t].concat(n))},broadcast:function(e,t,n){i.call(this,e,t,n)}}}},325:function(e,t,n){"use strict";n(310),n(162),n(69);var i=n(311),o={name:"mInput",mixins:[n(322).a],props:{value:[String,Number],size:String,readonly:Boolean,disabled:Boolean,placeholder:[String,Number],beforeIcon:String,afterIcon:String,iconColor:String,allowClear:Boolean,autofocus:Boolean,autosize:[Boolean,Object],type:{type:String,default:"text"}},components:{mIcon:i.a},data:function(){return{currentValue:this.value}},watch:{value:function(e){this.currentValue=e}},computed:{sizeType:function(){return["small","normal","big"].includes(this.size)?"size-"+this.size:"size-normal"},showClear:function(){return!(!this.allowClear||this.disabled||this.readonly||""===this.currentValue)}},created:function(){},mounted:function(){},methods:{handleInput:function(e){var t=e.target.value,n=this.$parent.$options.name||"";this.currentValue=t,this.$emit("input",t),n&&"mFormItem"===n&&this.dispatch("mFormItem","on-form-change",t)},handleFocus:function(){this.$emit("focus",this.currentValue)},handleBlur:function(){var e=this.$parent.$options.name||"";this.$emit("blur",this.currentValue),e&&"mFormItem"===e&&this.dispatch("mFormItem","on-form-blur",this.currentValue)},handleChange:function(e){var t=e.target.value;this.currentValue=t,this.$emit("change",t)},clearInput:function(){this.currentValue="",this.$emit("input",""),this.$refs.input.focus()}}},a=n(41),r=Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mhz-input"},["textarea"!==e.type?[e.beforeIcon?n("nav",{staticClass:"mhz-input__beforeicon"},[n("m-icon",{attrs:{name:e.beforeIcon,color:e.iconColor}})],1):e._e(),e._v(" "),n("input",{ref:"input",staticClass:"mhz-input__inner",class:[e.sizeType,{"is-both-icon":e.afterIcon&&e.showClear,"is-before-icon":e.beforeIcon,"is-after-icon":e.afterIcon||e.showClear,"is-readonly":e.readonly,"is-disabled":e.disabled}],attrs:{type:e.type,readonly:e.readonly,disabled:e.disabled,autofocus:e.autofocus,placeholder:e.placeholder},domProps:{value:e.currentValue},on:{focus:e.handleFocus,blur:e.handleBlur,change:e.handleChange,input:e.handleInput}}),e._v(" "),e.afterIcon||e.showClear?n("nav",{staticClass:"mhz-input__aftericon"},[e.showClear?n("m-icon",{staticClass:"mhz-input__aftericon__close",staticStyle:{"margin-right":"5px"},attrs:{name:"cuowu"},on:{click:e.clearInput}}):e._e(),e._v(" "),e.afterIcon?n("m-icon",{attrs:{name:e.afterIcon,color:e.iconColor}}):e._e()],1):e._e()]:[n("textarea",{ref:"input",staticClass:"mhz-input__inner",attrs:{readonly:e.readonly,disabled:e.disabled,autofocus:e.autofocus,placeholder:e.placeholder},domProps:{value:e.currentValue},on:{focus:e.handleFocus,blur:e.handleBlur,change:e.handleChange,input:e.handleInput}})]],2)}),[],!1,null,null,null);t.a=r.exports},344:function(e,t,n){},375:function(e,t,n){"use strict";n(344)},578:function(e,t,n){"use strict";n.r(t);n(309),n(42),n(68);var i=n(321),o=n(325),a=(n(320),n(95),n(10),{name:"mForm",provide:function(){return{form:this}},props:{model:{type:Object},rules:{type:Object}},components:{},data:function(){return{fields:[]}},watch:{},computed:{},created:function(){var e=this;this.$on("on-form-item-add",(function(t){t&&e.fields.push(t)})),this.$on("on-form-item-remove",(function(t){t&&e.fields.splice(e.fields.indexOf(t),1)}))},mounted:function(){},methods:{resetFields:function(){this.fields.forEach((function(e){e.resetField()}))},validate:function(e){var t=this;return new Promise((function(n){var i=!0,o=0;t.fields.forEach((function(a){a.validate("",(function(a){a&&(i=!1),++o===t.fields.length&&(n(i),"function"==typeof e&&e(i))}))}))}))}}}),r=n(41),s=Object(r.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("form",{staticClass:"mhz-form"},[this._t("default")],2)}),[],!1,null,null,null).exports,l=(n(163),n(31),n(322)),c=n(374),u={name:"mFormItem",inject:["form"],mixins:[l.a],props:{label:{type:String,default:""},prop:{type:String}},components:{},data:function(){return{isRequired:!1,validateState:"",validateMessage:""}},watch:{},computed:{fieldValue:function(){return this.form.model[this.prop]}},created:function(){},mounted:function(){this.prop&&(this.dispatch("mForm","on-form-item-add",this),this.initialValue=this.fieldValue,this.setRules())},beforeDestroy:function(){this.dispatch("mForm","on-form-item-remove",this)},methods:{setRules:function(){var e=this,t=this.getRules();t.length&&t.every((function(t){e.isRequired=t.required})),this.$on("on-form-blur",this.onFieldBlur),this.$on("on-form-change",this.onFieldChange)},getRules:function(){var e=this.form.rules;return e=e?e[this.prop]:[],[].concat(e||[])},getFilteredRule:function(e){return this.getRules().filter((function(t){return!t.trigger||-1!==t.trigger.indexOf(e)}))},validate:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},i=this.getFilteredRule(e);if(!i||0===i.length)return!0;this.validateState="validating";var o={};o[this.prop]=i;var a=new c.a(o),r={};r[this.prop]=this.fieldValue,a.validate(r,{firstFields:!0},(function(e){t.validateState=e?"error":"success",t.validateMessage=e?e[0].message:"",n(t.validateMessage)}))},resetField:function(){this.validateMessage="",this.validateState="",this.form.model[this.prop]=this.initialValue},onFieldBlur:function(){this.validate("blur")},onFieldChange:function(){this.validate("change")}}},m=Object(r.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mhz-form-item"},[n("div",{staticClass:"mhz-form-item-label"},[e.label?n("label",{class:{"mhz-form-item-label-required":e.isRequired}},[e._v("\n      "+e._s(e.label)+"\n    ")]):e._e()]),e._v(" "),n("div",{staticClass:"mhz-form-item-wrapper"},[e._t("default"),e._v(" "),"error"===e.validateState?n("div",{staticClass:"mhz-form-item-message"},[e._v("\n      "+e._s(e.validateMessage)+"\n    ")]):e._e()],2)])}),[],!1,null,null,null).exports,d=n(315),h={name:"mhz-form",props:{},mixins:[n(314).a],components:{mButton:i.a,mInput:o.a,mForm:s,mFormItem:m,CodePanel:d.default},data:function(){return{formValidate:{name:"",mail:""},ruleValidate:{name:[{required:!0,message:"用户名不能为空",trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]},codeStr:"\n        /* code */\n        <template>\n          <div class=\"main\">\n            <h1>Form 表单</h1>\n            <m-form ref=\"form\" :model=\"formValidate\" :rules=\"ruleValidate\">\n              <m-form-item label=\"用户名\" prop=\"name\">\n                <m-input v-model=\"formValidate.name\"></m-input>\n              </m-form-item> \n              <m-form-item label=\"邮箱\" prop=\"mail\">\n                <m-input v-model=\"formValidate.mail\"></m-input>\n              </m-form-item> \n            </m-form>\n\n            <m-button @click=\"submit\">提交</m-button>\n            <m-button @click=\"reset\">重置</m-button>\n          </div>\n        </template>\n        <script>\n          export default {\n            data() {\n              return {\n                formValidate: {\n                  name: '',\n                  mail: ''\n                },\n                ruleValidate: {\n                  name: [\n                    { required: true, message: '用户名不能为空', trigger: 'blur' }\n                  ],\n                  mail: [\n                    { required: true, message: '邮箱不能为空', trigger: 'blur' },\n                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }\n                  ],\n                }\n              };\n            },\n            methods: {\n              submit() {\n                // this.$refs.form.validate((valid) => {\n                //   if (valid) {\n                //     console.log('提交成功');\n                //   } else {\n                //     console.log('提交失败');\n                //   }\n                // })\n\n                //  promise\n                const validate = this.$refs.form.validate();\n            \n                validate.then((valid) => {\n                  if (valid) {\n                    console.log('提交成功');\n                  } else {\n                    console.log('提交失败');\n                  }\n                })\n              },\n              reset() {\n                this.$refs.form.resetFields();\n              }\n            },\n          };\n        <\/script>\n      ".replace(/^s*/gm,"").trim()}},watch:{},computed:{},created:function(){},mounted:function(){},methods:{submit:function(){this.$refs.form.validate().then((function(e){e?console.log("提交成功"):console.log("提交失败")}))},reset:function(){this.$refs.form.resetFields()}}},f=(n(375),Object(r.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-form"},[n("h3",[e._v("Form")]),e._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("m-form",{ref:"form",attrs:{model:e.formValidate,rules:e.ruleValidate}},[n("m-form-item",{attrs:{label:"用户名",prop:"name"}},[n("m-input",{model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}})],1),e._v(" "),n("m-form-item",{attrs:{label:"邮箱",prop:"mail"}},[n("m-input",{model:{value:e.formValidate.mail,callback:function(t){e.$set(e.formValidate,"mail",t)},expression:"formValidate.mail"}})],1)],1),e._v(" "),n("m-button",{on:{click:e.submit}},[e._v("提交")]),e._v(" "),n("m-button",{on:{click:e.reset}},[e._v("重置")])],1),e._v(" "),n("code-panel",{attrs:{code:e.codeStr}})],1)])}),[],!1,null,"6ca2c418",null));t.default=f.exports}}]);