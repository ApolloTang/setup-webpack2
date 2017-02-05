const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuration with HtmlWebpackPlugin.
const config = {
    context: pathResolve('src'),                // [1]
    entry: './main.js',                         // [2]
    output: {
        filename: 'bundle.js',                  // [3]
        path: pathResolve('dist'),              // [4]
        publicPath: '/',                        // [5]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html',  // [6]
            favicon: './favicon.ico'            // [7]
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
// [3] • Name of the webpack's output file (output chunkname).
//
// [4] • For destribution, Webpack's output is saved to this location
//       on the file system.
//     • Webpack-dev-server ignore this item.
//
// [5] • During developement this is the path of which webapck's output
//       will be served by webpack-dev-server.
//     • When building for distribution, this is path of webpack's output
//       relative to output.path
//     • Html-webpack-plugin will genearted an index.html whose path in
//       script element is set to this path value.
//
// [6] • HtmlWebpackPlugin use this template to generate index.html
//
// [7] • Tell HtmlWebpackPlugin where to find favicon
//

