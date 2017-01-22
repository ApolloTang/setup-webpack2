const pathResolve = require('path').resolve;

// webpack-dev-server configuration
const config = {
    devServer: {
        contentBase: pathResolve('public') // [1]
    },
    context: pathResolve('src'),           // [2]
    entry: './main.js',                    // [3]
    output: {
        publicPath: 'scripts/',            // [4]
        filename: 'bundle.js',             // [5]
    },
};

module.exports = config;

//
// [1] • Root of the webpack-dev-server's http-server.
//     • webpack-dev-server deliver index.html file from this location.
//     • Must be absolute path.
//
// [2] • Webpack look for its input from this location.
//     • Must be absolute path.
//
// [3] • Name of Webpack's input file.
//
// [4] • Webpack-dev-server serves Webpack's output via this path.
//     • Not absolute path.
//     • Output are served from memory, not from file.system.
//
// [5] • Name of the output.
//

