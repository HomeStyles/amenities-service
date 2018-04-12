const path = require('path');
let SRC_DIR = path.join(__dirname, '/client/src');
let DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
<<<<<<< HEAD
  entry: `${SRC_DIR}/components/index.jsx`,
=======
  entry: `${SRC_DIR}/index.jsx`,
>>>>>>> b7577639f96089937fb147e159ef7488c852318a
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  }, 
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};