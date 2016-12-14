var path = require('path');
var express = require('express');
var webpack = require('webpack');

var webpackDevConfig = require('../webpack.dev.config');
var webpackCompiler = webpack(webpackDevConfig);

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();
var router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(router);

app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(webpackCompiler, {
    log: console.log
}));

app.listen(3000, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:3000/');
});