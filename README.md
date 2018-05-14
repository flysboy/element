# 高仿饿了么app
# 运用技术栈
vue2.5.2 + vue-router3.0.1 + vue-cli + vue-resource + flex布局 + sticky-footer布局 + es6 + eslint + webpack3.10.0 + stylus
以及移动端border-1px的实现

# 实现功能
•    Goods、Ratings、Seller组件视图均可上下滚动
•    点击商品能够查看商品详情
•    模拟商家信息，loaclStorage缓存商家信息（id、name）
•    实现购物车组件，可以添加删除商品，并产生动画效果，点击购物车图标，展示选择的商品列表
•    可以筛选查看评论嘻嘻
•    商家实景图片可以左右滑动 

# 项目运行

克隆项目到本地
git clone https://git@github.com:flysboy/sell.app.git

安装依赖
npm install

本地开发，开启服务器，浏览器访问http://localhost:8080
npm run dev

构建生产
npm run build

运行打包文件
node prod.server.js 

会看到 Listening at http://localhost:9000 在浏览器中打开即可

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
