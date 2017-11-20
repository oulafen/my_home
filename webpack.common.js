const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: {
        index: './src/js/index.es6',
        list: './src/js/list.es6'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: 'dist'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: 'sass-loader' // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=200000&name=/imgs/[hash].[ext]'
            },
            {
                test: path.join(__dirname, 'src/js'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }

};

