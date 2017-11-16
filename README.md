# 我的网站
包括我的个人简介, 心理路程, 以及其他想分享的点点滴滴 
链接[http://www.oulafen.com](http://www.oulafen.com)
## 构建过程
- 安装`webpack`和`es6`
```
npm init
npm install webpack  babel-loader babel-preset-es2015 --save-dev
```
- 安装`css`/`sass`解析
```
npm install --save-dev css-loader style-loader sass-loader node-sass file-loader url-loader
```
- 配置`webpack.config.js`文件
- 编译
执行以下命令编译
```
webpack
```

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
    npm install file-loader url-loader -D
    ```
    2 修改配置`webpack.config.js`
    ```
     {
         test: /\.(png|jpg)$/,
         loader: 'url-loader?limit=200000&name=/imgs/[hash].[ext]' //此处的链接是相对于output中设置的`publicPath`的路径
     }
    ```
    参考: [How to output a image file in css background-image to another folder?](https://github.com/webpack-contrib/url-loader/issues/16)


# 内容

## 我的首页
### 简介
   本银女，标准的90后，最喜欢和有激情无规矩的小伙伴们一起玩耍。
   
   自互联网+以来，前端越来越好玩，禁不住诱惑，终于有了这从后端大军中纵身一跃到前端之火中的桥段（Ruby、nodejs略懂一二，可以自己做个小东西玩玩）。
   
   当然，最最开始的初衷是因为设计，想不到吧，虽然审美还是一塌糊涂，但要相信美是可以熏陶出来的。
   
### 专业技能
   前端技术xhtml & html5、css2 & css3、javascript、vue、ES6，三年开发经验
   - 前端
   
    基础技能(html & html5, css & scss, js): 熟练
    框架(jquery, zepto, vue, bootstrap, amaze ui, jqweui等): 熟练
    
   - 工具
   
    系统(windows, mac, linux): 熟悉
    编程IDE(webStorm, phpStorm, sublime, Hbuilder等): 熟悉
    团队协作工具(git、svn等): 熟悉
    
   - 后端
   
    nodejs: 4分 (基于compress框架写过网站应用及脚本)
    ruby: 3分 (早年使用ruby完成过两个项目, 可能有点小忘, 不过可以快速拾起来)
    php: 3分 (联调时经常接触php代码, so你懂的...)
    
   - 服务器
   
    nginx/apache: 熟悉 (可独立完成项目部署并上线)
    
   - 其他
   
    热爱前端编码，做事踏实有耐心，良好的沟通能力、语言表达能力、总结能力及团队合作能力。
   
### 项目列表

pc端官网

    - GreatSeed电商平台 [https://www.greatseed.com](https://www.greatseed.com)
    - 众筹平台 [http://blog.oulafen.com/frontend-rmbplus-2.0/](http://blog.oulafen.com/frontend-rmbplus-2.0/)
    - 李宁10K官网 [https://10k.runninglemon.com/](https://10k.runninglemon.com/)

移动端网站 

    - 李宁10K官网移动端 [https://10k.runninglemon.com/](https://10k.runninglemon.com/)
    - CUBA网站 [http://cuba.vivachinasports.com/](http://cuba.vivachinasports.com/)
    - iRun约活动&约机器 [http://10ksearch.runninglemon.com/irun.php/](http://10ksearch.runninglemon.com/irun.php/)
    
H5活动

    - 李宁10K预热 [https://share.runninglemon.com/home/activity/preheating](https://share.runninglemon.com/home/activity/preheating)
    - 城市勋章环游记 [https://share.runninglemon.com/home/activity/city-medal-index](https://share.runninglemon.com/home/activity/city-medal-index)
    - 最美等级介绍 [https://share.runninglemon.com/intro/level](https://share.runninglemon.com/intro/level)
    - 柏马活动-刮刮卡 [http://blog.oulafen.com/h5-scratch-card-berlin](http://blog.oulafen.com/h5-scratch-card-berlin)
    - 地图轨迹h5 [http://blog.oulafen.com/demo-draw-map-colorfully/](http://blog.oulafen.com/demo-draw-map-colorfully/)
    - 大头儿子摇一摇抽签小游戏 [http://blog.oulafen.com/h5-big-head-son-game/](http://blog.oulafen.com/h5-big-head-son-game/)
    - 九宫格抽奖 [http://blog.oulafen.com/demo-big-head-son-lucky-draw/](http://blog.oulafen.com/demo-big-head-son-lucky-draw/)
    - 天福号火腿介绍 [http://blog.oulafen.com/h5-tianfuhao-ham/](http://blog.oulafen.com/h5-tianfuhao-ham/)