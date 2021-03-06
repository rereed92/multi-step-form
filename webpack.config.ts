import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      containers: path.resolve(__dirname, './src/containers/'),
      pages: path.resolve(__dirname, './src/pages/'),
      components: path.resolve(__dirname, './src/components/'),
      theme: path.resolve(__dirname, './src/assets/theme/'),
      styles: path.resolve(__dirname, './src/assets/styles/'),
      icons: path.resolve(__dirname, './src/assets/icons/'),
      utilities: path.resolve(__dirname, './src/utilities/'),
      routes: path.resolve(__dirname, './src/routes/'),
      store: path.resolve(__dirname, './src/store/'),
      validations: path.resolve(__dirname, './src/validations/'),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;
