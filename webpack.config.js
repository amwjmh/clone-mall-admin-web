const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                
              },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },{
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/main.js')
        }),
        new VueLoaderPlugin()
    ],
    mode: 'development',
    devServer: {
        compress: true,
        port: 3000
    }
}