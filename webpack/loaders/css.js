export default [
  {
    test: /\.css$/,
    loader: 'style!css?modules',
    exclude: /node_modules\/react-select/
  },
  {
    test: /\.css$/,
    loader: 'style!css',
    include: /node_modules\/react-select/
  }
]
