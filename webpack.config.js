module.exports = {
  entry: "./app/assets/frontend/main.jsx",
  output: {
    filename: 'bundle.js',
    path: __dirname + '/app/assets/javascripts'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
