const pathResolve = require('path').resolve;


// Configuration for webpack to build for distribution
const config = {
    context: pathResolve('src'),               // [1]
    entry: './main.js',                        // [2]
    output: {
        path:  pathResolve('server/dist'),     // [3]
        filename: 'bundle.js',                 // [4]
    },
};

module.exports = config;

//
// [1] • Context of entry point, webpack look for input from this location.
//     • [!] must be absolute path.
//
// [2] • Name of the input file.
//
// [3] • output.path: after building, webpack's output is saved to this location
//       in the file system.
//
// [4] • Name of Webpack's output.
//

