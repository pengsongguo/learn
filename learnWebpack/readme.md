# webpack 入门练习

## webpack 的安装、项目初始化

`npm init`

`npm install webpack webpack-cli --save-dev`

## 生成打包文件

*test.js*

`webpack ./test.js`

## 创建 webpack 配置文件

*webpack.config.js*

## NPM 脚本

*package.json*

## 编写头像、按钮等 UI 组件

*Avatar*

*Button*

*Card*

## 文件管理、loader 配置使用

*webpack.config.js*

`file-loader`
`css-loader`
`style-loader`
`sass-loader`

## 样式前缀补全

`post-css` 使用配置

## 兼容 ES6、ES7 等

`babel` 使用配置

## 多入口、多出口的打包配置

*webpack.config.js*

`entry`
`output`


## 输出自动化、清理打包目录

`clean-webpack-plugin`
`html-webpack-plugin`
`html-webpack-template`

## source-map

*webpack.config.js* 

`devtool`

## webpack-dev-server

*webpack.config.js* 

`devServer`

*package.json*

## Code Splitting

- 多入口、多出口
- `webpack.config.js` 配置属性
- `SplitChunksPlugin` 配置

## 缓存

## HMR

## Tree Shaking
## 生产、测试环境构建

`webpack-merge`

*webpack.dev.js*

*webpack.prod.js*

*webpack.common.js*

## 懒加载

## Shimming

## 创建库

