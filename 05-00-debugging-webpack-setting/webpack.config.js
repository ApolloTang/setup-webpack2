const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const webpackDevServer_host = '0.0.0.0';
const webpackDevServer_port = 8080;
const absolutePath_sourceFolder = pathResolve('src');
const absolutePath_buildFolder = pathResolve('dist');

const config_fn = env => {
    const config = {
        devServer: {
            host: webpackDevServer_host,
            port: webpackDevServer_port
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
            new ProgressBarPlugin()
        ],
    };

    if (env && env.debug) {
        echoSettings();
        console.log('webpack.config: ', config);
    }
    if (env && env.debug && env.inspect) {
        debugger; // pause in debug inspector;
    }
    return config;
}

module.exports = config_fn;


function echoSettings() {
    const settings = `
        webpackDevServer_host: ${webpackDevServer_host}
        webpackDevServer_port: ${webpackDevServer_port}
        absolutePath_sourceFolder: ${absolutePath_sourceFolder}
        absolutePath_buildFolder: ${absolutePath_buildFolder}
    `;
    console.log(settings);
}

