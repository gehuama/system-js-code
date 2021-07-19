const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html 插件
module.exports = (env) => {
    return {
        mode: "development",
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, 'dist'), // 解析当前路径
            libraryTarget: env.production ? 'system' : '' // 打包采用什么规范 system规范 // 打包的格式 system 模块
        },
        module: {
            rules: [
                // 匹配js结尾，采用babel-loader进行转译 排除node_modules
                { test: /\.js$/, use: { loader: "babel-loader" }, exclude: /node_modules/ }
            ]
        },
        plugins: [ // 引入插件
            // 生产环境不需要打包html 只需要打包js
            !env.production && new HtmlWebpackPlugin({
                template: "./public/index.html" //模版路径
            })
        ].filter(Boolean), // 如果是false 给过滤调
        // 生产环境忽略 react, react-dom 两个包 不对其进行打包
        externals: env.production ? ['react', 'react-dom'] : []
    }
}