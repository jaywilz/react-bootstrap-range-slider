import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import less from 'rollup-plugin-less';
import path from 'path';
import license from 'rollup-plugin-license';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile = NODE_ENV === 'production' ? './dist/index.js' : './dist/dev.js';

export default {
  input: './src/index.js',
  output: {
    file: outputFile,
    format: 'cjs',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: ['node_modules/**'],
    }),
    commonjs(),
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
  external: [
    'react',
    'react-bootstrap',
    'react-dom',
  ],
};
