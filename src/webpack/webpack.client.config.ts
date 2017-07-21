import * as webpack from 'webpack';
import * as path from 'path';

const baseDir = path.resolve(__dirname, '../..');

const config: webpack.Configuration= {
  cache: false,
  devtool: 'source-map',
  entry: {
    client: [
      './src/client/index.ts',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.webpack.json',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(baseDir, './assets'),
    publicPath: "/assets/",
  },
};

export default config;
