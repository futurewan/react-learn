const path = require('path')
const webpack = require('webpack');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:[
        'react-hot-loader/patch',//激活HMR
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './redux/index.jsx'
    ],
        // app:'./react/index.js'
        // app:'./flux/index.jsx',
    output:{
        filename:'[name].[hash:8].js',
        path:path.join(__dirname,'dist'),
        publicPath: '/'
    },
    resolve:{
       extensions:['.js','.jsx','.less','.json']
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:['babel-loader'],
                exclude:/node_modues/
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),// 热替换插件
        new webpack.NamedModulesPlugin() //热替换是打印模块名字
        // new CommonsChunkPlugin()
    ],
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        port: 8080,
        // historyApiFallback: true,
        open:true,
        hot: true // 激活服务器的HMR
    }
}