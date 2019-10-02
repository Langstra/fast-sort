const sizes = require('rollup-plugin-sizes');
const babel = require('rollup-plugin-babel');

module.exports = [{
  input: 'sort.js',
  output: {
    file: 'dist/sort.es5.js',
    format: 'umd'
  },
  plugins: [
    babel(),
    sizes()
  ]
}, {
  input: 'sort.js',
  output: {
    file: 'dist/sort.es5.min.js',
    format: 'umd'
  },
  plugins: [
    babel(),
    sizes()
  ]
}, {
  input: 'sort.js',
  output: {
    file: 'dist/sort.js',
    format: 'esm'
  },
  plugins: [
    sizes()
  ]
}];
