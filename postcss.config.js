module.exports = {
  map: false,
  plugins: [
    require('autoprefixer')({ browsers: 'last 2 versions'}),
    require('cssnano')(),
    require('postcss-fixes')({preset: 'safe'}),
    require('postcss-flexbugs-fixes'),
    require('postcss-pxtorem')({rootValue: 16})
  ]
}
