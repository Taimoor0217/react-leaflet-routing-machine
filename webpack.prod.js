const path = require('path')
module.exports = {
    entry: {
        main: path.join(__dirname, "src/reactLeafletRoutingMachine.jsx") //for non static user wtitten code
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test :/\jsx?$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },
            {
<<<<<<< HEAD
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
=======
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
>>>>>>> ca0d58c588703222bd32c1b6ed43d1fc14036aa7
        ]
    },
}