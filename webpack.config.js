const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./index.js", // 入口文件
    output: {
        filename: "index.bundle.js", // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出文件目录
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

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: "none"
}