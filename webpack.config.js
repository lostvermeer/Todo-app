const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.tsx', // Your main entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory before each build
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i, // Matches .ts and .tsx files
        exclude: ['/node_modules/'],
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false, // this option will solve the issue
            },
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css|\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Add loaders for CSS/SCSS
      },
    ],
  },
  devtool: 'inline-source-map', // Source map support for debugging
  devServer: {
    static: './dist', // Serve files from the dist directory
    hot: true, // Enable hot module replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template
    }),
    new CleanWebpackPlugin(), // Automatically clean the output directory before each build
  ],
};
