const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin'); // [wp|4]


const webpackDevServer_host = '0.0.0.0';
const webpackDevServer_port = 8080;

const absolutePath_sourceFolder = pathResolve('src');
const absolutePath_buildFolder = pathResolve('dist');


const config = {
    devServer: {
        host: webpackDevServer_host,   // [wp|4]
        port: webpackDevServer_port    // [wp|4]
    },
    context: absolutePath_sourceFolder,
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: absolutePath_buildFolder,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html',
            favicon: './favicon.ico'
        }),
        new ProgressBarPlugin()        // [wp|4]
    ],
};

module.exports = config;


