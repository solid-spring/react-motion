'use strict';

module.exports = {
  mode: 'development',
  devtool:
    process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
  entry: {
    'demo0-simple-transition': './demos/demo0-simple-transition/index.tsx',
    'demo1-chat-heads': './demos/demo1-chat-heads/index.tsx',
    'demo2-draggable-balls': './demos/demo2-draggable-balls/index.tsx',
    'demo3-todomvc-list-transition':
      './demos/demo3-todomvc-list-transition/index.tsx',
    'demo4-photo-gallery': './demos/demo4-photo-gallery/index.tsx',
    'demo5-spring-parameters-chooser':
      './demos/demo5-spring-parameters-chooser/index.tsx',
    'demo7-water-ripples': './demos/demo7-water-ripples/index.tsx',
    'demo8-draggable-list': './demos/demo8-draggable-list/index.tsx',
  },
  output: {
    filename: '[name]/all.js',
    publicPath: '/demos/',
    path: __dirname + '/demos/',
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /build|lib|bower_components|node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
