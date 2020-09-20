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
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
}