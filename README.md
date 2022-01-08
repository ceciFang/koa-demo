## webpack

npm install -D nodemon // 开发的依赖

运行命令 npx nodemon src/index.js

### 热加载

- package.json 文件

  ```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  // 把上面的scripts 改成下面的形式

  "scripts": {
    "start": "nodemon src/index.js"
  },
  ```

- 运行命令
  ```sh
   npm run start
  ```

## 让项目支持 ES6 语法

- 安装依赖

  ```sh
   npm install -D webpack webpack-cli
  ```

- 安装 webapck 模块

  ```sh
   npm install -D clean-webpack-plugin webpack-node-externals @babel/core @babel/node @babel/preset-env babel-loader cross-env

  ```

- 在根目录（跟 src 平级）创建 webpack.config.js 文件
  `（webapck 入口文件）`

  - 配置 webpack

    ```js
    const webpackconfig = {
      target: 'node',
      mode: '',
    }
    ```

- label 配置

  - 在根目录（跟 src 平级）创建 .babelrc 文件

  ```js
  {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
  }

  ```
