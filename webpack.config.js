const Webpack = require('webpack');
const config = {
  entry: {
    vendor: './src/vendor.js',
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.jpg?g$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
              publicPath: 'assets',
            },
          },
        ],
      },
      {
        test: /\.(png|gif|svg|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets',
              publicPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  // This config allows to use jQuery $ sign
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
module.exports = config;
