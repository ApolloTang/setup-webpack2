const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuration with HtmlWebpackPlugin.
const config = {
    context: pathResolve('src'),                // [1]
    entry: './main.js',                         // [2]
    output: {
        path: pathResolve('dist'),              // [3]
        filename: 'bundle.js',                  // [4]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html',  // [5]
            favicon: './favicon.ico'            // [6]
        }),
    ],
};

module.exports = config;

//
// [1] • Webpack look for its input from this location.
//     • Must be absolute path.
//
// [2] • Name of the Webpack's input file.
//
// [3] • For destribution, Webpack's output is saved to this location
//       on the file system.
//     • Webpack-dev-server ignore this item.
//
// [4] • Name of the output.
//
// [5] • HtmlWebpackPlugin use this template to generate index.html
//
// [6] • Tell HtmlWebpackPlugin where to find favicon
//

