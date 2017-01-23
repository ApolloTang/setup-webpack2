const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuration HtmlWebpackPlugin.
const config = {
    devServer: {                                // [1]
        // contentBase: pathResolve('server'),  // [2]
    },
    context: pathResolve('src'),                // [3]
    entry: './main.js',                         // [4]
    output: {
        // publicPath: 'dist/',                 // [5]
        path: pathResolve('dist'),              // [6]
        filename: 'bundle.js',                  // [7]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html',  // [8]
            favicon: './favicon.ico'
            // inject: 'head',                  // [5]
        }),
    ],
};

module.exports = config;

//
// [1] • devServer is used by webpack-dev-server, it is ignore by webpack.
//
// [2] • No need to specify location of index.html because index.html is generated
//       dynamically by HTMLWebpackPlugin
//
// [3] • Context of entry point, Webpack look for its input from this location.
//     • Must be absolute path.
//
// [4] • Name of the Webpack's input file.
//
// [5] • When developing using HtmlWebpackPlugin, you don't need to tell
//       webpack-dev-server where to serve webpack's output.
//
// [6] • For destribution, Webpack's output is saved to this location
//       on the file system.
//     • Webpack-dev-server ignore this item.
//
// [7] • Name of the output.
//
// [8] • HtmlWebpackPlugin use this template to generate index.html
//
// [9] • Tell HtmlWebpackPlugin where to find favicon
//
// [10] • To avoid flash of unstyle page, never inject css link tag into head.
//

