const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const projectRoot = process.cwd(); // 执行js的文件目录

module.exports = {
    entry: "./index.js", // 入口文件
    output: {
        filename: "index.bundle.js", // 输出文件名
        path: path.resolve(projectRoot, 'dist'), // 输出文件目录
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true
                        }
                    }
                ]

            },
            {
                test: /\.css$/, // 以.css结尾的文件
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(projectRoot, 'index.html') 
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件进行重命名
            filename: '[name].css',
            chunkFilename: '[id].css',
        })  
 
    ],
    mode: "none"
}