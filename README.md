# system-js-code
systemJS 是一个通用的模块加载器，它能在浏览器上动态加载模块。 微前端的核心就是加载微应用，我们将应用打包成模块，在浏览器中通过systemJS来加载解决


## 安装
    1. npm init -y
    /** 
     * webpack webpack-cli 基本webpack需要 
     * webpack-dev-serve 本地服务
     * babel-loader  高级语法转化成低价语法
     * @babel/core 调用核心模块 babel-loader会调用babel/core
     * @babel/preset-env 转译 ES6 转化 ES5
     * @babel/preset-react 转译 react语法
     * html-webpack-plugin html插件
     */ 
    2. npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin -D
    /**
     * 安装react react-dom
     */
    3. npm install react react-dom