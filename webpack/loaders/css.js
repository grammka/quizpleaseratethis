export default [
  {
    test: /\.css$/,
    loader: 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
    exclude: /node_modules\/react-select/
  },
  {
    test: /\.css$/,
    loader: 'style!css',
    include: /node_modules\/react-select/
  }
]
