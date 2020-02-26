import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import less from 'rollup-plugin-less';
import path from 'path';
import license from 'rollup-plugin-license';
import resolve from '@rollup/plugin-node-resolve';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile = NODE_ENV === 'examples' ? './docs/js/examples-umd.js' : (NODE_ENV === 'production' ? './dist/index.js' : './dist/dev.js');

export default {
  input: './src/index.js',
  output: {
    file: outputFile,
    format: NODE_ENV === 'examples' ? 'umd' : 'cjs',
    name: NODE_ENV === 'examples' ? 'ReactBootstrapRangeSlider' : undefined,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: ['node_modules/**'],
    }),
    commonjs(),
    ...(NODE_ENV === 'examples' ? [ resolve() ] : []),
    less({
      output: './dist/react-bootstrap-range-slider.css',
    }),
    license({
      sourcemap: true,
      banner: {
        content: {
          file: path.join(__dirname, 'LICENSE'),
          encoding: 'utf-8',
        },
      },
    }),
  ],
  external: NODE_ENV === 'examples' ? [ 'react', 'react-dom'] : [ 'react', 'react-bootstrap', 'react-dom' ],
};
