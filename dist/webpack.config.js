module.exports = {
  entry: __dirname + '/../',
  output: {
    path: __dirname,
    filename: 'travix-di.js',
    libraryTarget: 'this',
    library: 'TravixDI'
  },
  externals: {}
};
