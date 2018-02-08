const path = require('path')
const webpack = require('webpack');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        // app:'./flux/index.jsx'
        app:'./redux/counter/index.js'
    },
    output:{
        filename:'[name].[hash:8].js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:['babel-loader'],
                exclude:/node_modues/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        })
        // new CommonsChunkPlugin()
    ],
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        port: 8080,
        historyApiFallback: true,
        open:true
    }
}