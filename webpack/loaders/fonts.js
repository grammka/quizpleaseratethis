import path from 'path'


export default [
  {
    test: /\.(ttf|eot|svg|woff2?)(\?.+)?$/,
    include: /fonts/,
    loader: 'file',
    query: {
      context: path.join(__dirname, '../build'),
      name: 'assets/fonts/[1]',
      regExp: 'assets/fonts/(.*)'
    }
  }
]
