const pathResolve = require('path').resolve;

// webpack-dev-server configuration
const config = {
    devServer: {
        contentBase: pathResolve('server') // [1]
    },
    context: pathResolve('src'),           // [2]
    entry: './main.js',                    // [3]
    output: {
        publicPath: 'dist/',               // [4]
        filename: 'bundle.js',             // [5]
    },
};

module.exports = config;

//
// [1] • Root of the webpack's http dev-server.
//     • webpack-dev-server deliver index.html file from this location.
//     • Must be absolute path.
//
// [2] • Webpack look for its input from this location.
//     • Must be absolute path.
//
// [3] • Name of Webpack's input file.
//
// [4] • Webpack-dev-server serves Webpack's output via this path.
//     • Output are served from memory, not from file.system.
//     • Not absolute path, relative to location of __dirname.
//
// [5] • Name of the output.
//

