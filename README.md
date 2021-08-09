# my-components

## 发布npm
1.  打包组件库
    修改 package.json 中的build 
      => vue-cli-service build --target lib --name m-ui --dest lib src/components/index.js
      打包后输出 umd 构建版本

      umd(统一模块定义，可以兼容common.js(node端规范)/ AMD(浏览器端规范)/ ES6(node端不完全支持)等多种模块化方案，确保代码在各种环境下能被运行)
      ```javascript
        lib/m-ui.umd.min.js    
        lib/m-ui.umd.js        
        lib/m-ui.common.js     
        lib/m-ui.css 
      ```
2. 在 package.json 配置信息，指明入口文件
  ```javascript
    "name": "@mhzgg6/vue-m-ui",
    "version": "0.1.3",
    "private": false,
    "main": "lib/m-ui.umd.min.js",
    "description": "an UI based on Vue.js"
  ```
3. 发布到npm
  在命令行输入，注意每次发布都要修改package.json中的 "version": "0.0.x"，"private"必须设置成false才能发布
  ```javascript
    /** unlogin */
    npm 注册新用户
    npm adduser

    npm login
    npm publish
  ```

