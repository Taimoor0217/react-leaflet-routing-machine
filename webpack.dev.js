const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: path.join(__dirname, "dev/index.jsx") //for non static user wtitten code
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        stats: 'errors-warnings',
        clientLogLevel: 'error',
        contentBase: 'dist',
        port: 9000,
    },
    module: {
        rules: [
            {
                test :/\.jsx?$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },{
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                  }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                  }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        postcssOptions:{
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                  }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                  }]
            }
        ]
    },
    plugins :[
        new HTMLWebpackPlugin({
            template : path.join(__dirname, "dev/index.html")
        })
    ],
}