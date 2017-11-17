用到的技术有 

- html5, css3 & sass
- jquery & ES6
- vue & vue-router & vue-lazy-load
- webpack

## 搭建构建环境
- 安装`webpack`和`es6`
```
npm init
npm install webpack  babel-loader babel-preset-es2015 --save-dev
```
- 安装`css`/`sass`解析
```
npm install --save-dev css-loader style-loader sass-loader node-sass file-loader url-loader
```
- 编译
执行以下命令编译
```
webpack
```

- 构建开发/生产环境

安装`webpack-merge`依赖
```
npm install --save-dev webpack-merge
```
配置公共配置 `webpack.common.js`, 以及开发环境 `webpack.dev.js` 和 生产环境 `webpack.prod.js`

官网文档很详细, 不再赘述, 详戳[https://doc.webpack-china.org/guides/production/](https://doc.webpack-china.org/guides/production/)

更新 `NPM Scripts`, 修改 `package.json`

```
//...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch --config webpack.dev.js",
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
},
//...
```

构建命令
```
npm run watch #开发环境, 只启动监听静态资源变化
npm run start #开发环境, 启动热加载
npm run build #生产环境
```

--------------
## 错误处理
- 样式表里背景图片路径的问题

    执行`webpack`命令时报如下图片路径错误
    ```error
    ERROR in ./src/images/top_bg.jpg
    Module parse failed: Unexpected character '�' (1:0)
    You may need an appropriate loader to handle this file type.
    (Source code omitted for this binary file)
     @ ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss 6:4594-4625
     @ ./src/css/style.scss
     @ ./src/js/index.js
    ```
    
    解决方法:

    1 首先检查是否安装`file-loader` `url-loader`, 若没有, 则执行
    ```
    npm install file-loader url-loader -save-dev
    ```
    2 修改配置`webpack.config.js`
    ```
     {
         test: /\.(png|jpg)$/,
         loader: 'url-loader?limit=200000&name=/imgs/[hash].[ext]' //此处的链接是相对于output中设置的`publicPath`的路径
     }
    ```
    参考: [How to output a image file in css background-image to another folder?](https://github.com/webpack-contrib/url-loader/issues/16)
