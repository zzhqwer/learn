const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        // limit 限制 大小
                        limit: 20,
                        //图片名称， [name].[ext] ext就是jpg|png|gif
                        name: '[name].[ext]',
                        // 输出的路径
                        outputPath: 'image/',
                        //不按es6 模块输出 module
                        esModule: false
                    }
                },
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}