var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: '#source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, './src/app.js')
    ],
    output: {
        path: path.join(__dirname, './build/'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, './src')
        }, {
            test: /\.css$/,
            include: path.join(__dirname, './src'),
            loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=1&localIndentName=[name]__[local]___[hash:base64:5]',
                'postcss-loader'
            ]
        }]
    },
    postcss: function () {
        return [
            require("postcss-import")(),
            require("postcss-url")(),
            require('postcss-nested'),
            require("postcss-cssnext")(),
            require("postcss-browser-reporter")(),
            require("postcss-reporter")()
        ]
    }
};