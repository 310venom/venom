const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: { //ビルドするファイル
    common: './src/js/common.js',
    list: './src/js/list.js',
    counter: './src/js/counter.js',
    versus: './src/js/versus.js'
  },
  output: {
    path: path.join(__dirname, '/../docs/js'), //ビルドしたファイルを吐き出す場所(絶対パス)
    filename: '[name].js' //ビルドした後のファイル名
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['env']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './conf/eslintrc.js'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // css-loader -> style-loaderの順で通していく
      }
    ]
  },
  resolve: {
    // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
    extensions: ['.js', '.vue'],
    alias: {
      Root: path.join(__dirname, '/src/js/'),
      // vue-template-compilerに読ませてコンパイルするために必要
      vue$: 'vue/dist/vue.esm.js',
    },
  },
};
