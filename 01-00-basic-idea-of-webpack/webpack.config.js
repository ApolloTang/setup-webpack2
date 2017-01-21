const pathResolve = require('path').resolve;


const config = {
    context: pathResolve('src'),               // [1]
    entry: './main.js',                        // [2]
    output: {
        path:  pathResolve('public/scripts/'), // [3]
        filename: 'bundle.js',                 // [4]
    },
};

module.exports = config;

//
// [1] • Webpack look for its input from this location.
//     • Must be absolute path.
//
// [2] • Name of the input file.
//
// [3] • Webpack's output is saved to this location in the file system.
//     • Must be absolute path.
//
// [4] • Name of Webpack's output.
//

