const path = require("path");
const webpack = require("webpack");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: [
            "react-hot-loader/patch", //激活HMR
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            "./todo/src/index.jsx"
        ]
    },
    //'./redux/index.jsx'
    //'./react/index.js'
    //'./flux/index.jsx',
    output: {
        filename: "[name].[hash:8].js",
        path: path.join(__dirname, "dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx", ".less", ".json"]
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: ["babel-loader"],
                exclude: /node_modues/
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                use: [
                    {
                        // 使用对象可以对插件的参数进行配置
                        loader: "url-loader", //图片转换base64代码，封装file-loader
                        options: {
                            limit: 2048,
                            name: "[name].[ext]" //文件名加后缀
                        }
                    }
                ]
            },
            {
                test: /\.(less|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                          ident: 'postcss',
                          plugins: (loader) => [
                            // require('postcss-import')({ root: loader.resourcePath }),
                            // require('postcss-cssnext')(),
                            require('autoprefixer')(),
                            // require('cssnano')()
                          ]
                        }
                      },
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html")
        }),
        new webpack.HotModuleReplacementPlugin(), // 热替换插件
        new webpack.NamedModulesPlugin(), //热替换是打印模块名字
        // new webpack.LoaderOptionsPlugin({  
        //     options: {  
        //         postcss: function(){  
        //             return [  
        //                 require("autoprefixer")({  
        //                     browsers: ['ie>=8','>1% in CN']  
        //                 })  
        //             ]  
        //         }  
        //     }  
        // })
        // new CommonsChunkPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        publicPath: "/",
        port: 8080,
        // historyApiFallback: true,
        open: true,
        hot: true // 激活服务器的HMR
    }
};
