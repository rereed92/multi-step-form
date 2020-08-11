import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      containers: path.resolve(__dirname, './src/containers/'),
      pages: path.resolve(__dirname, './src/pages/'),
      components: path.resolve(__dirname, './src/components/'),
      theme: path.resolve(__dirname, './src/assets/theme/'),
      utilities: path.resolve(__dirname, './src/utilities/'),
      routes: path.resolve(__dirname, './src/routes'),
    },
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;