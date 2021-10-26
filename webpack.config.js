const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

// const stencil = require("@stencil/webpack");

module.exports = {
  entry: {
    index: ['./src/css/index.css', './src/index.ts']
  },
  node: false,
  output: {
    path: path.join(__dirname, 'dist'),
    chunkFilename: 'chunks/[id].js',
    publicPath: ''
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),   
    new HtmlWebPackPlugin({
      title: 'ArcGIS API  for JavaScript',
      template: './public/index.html',
      filename: './index.html',
      chunksSortMode: 'none',
      inlineSource: '.(css)$',
      favicon: './src/assets/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin({
      patterns: [{
        from: '**',
        context: 'node_modules/@esri/calcite-components/dist/calcite/',
        to: './',
      },
    {
      from: 'src/assets',
      to: './'
    }]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
