export default [
  {
    test   : /\.(png|ico|jpg|jpeg|gif|svg(\?.*)?)$/,
    loader : 'url?name=[path][name].[ext]'
  }
]

//
// export default [
//   {
//     test: /\.(png|ico|jpg|jpeg|gif)$/,
//     loader: 'url',
//     query: {
//       name: 'assets/[ext]/[name].[hash:6].[ext]',
//       limit: 8192
//     }
//   },
//   {
//     test: /\.svg(\?.*)?$/,
//     loader: 'url',
//     query: {
//       name: 'assets/[ext]/[name].[hash:6].[ext]',
//       limit: 10000,
//       mimetype: 'image/svg+xml'
//     }
//   }
// ]
