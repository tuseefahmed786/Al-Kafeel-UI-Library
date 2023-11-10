import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/my-library.js',
      format: 'cjs',
    },
    {
      file: 'dist/my-library.esm.js',
      format: 'esm',
    },
  ],

  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    commonjs(), // Include the commonjs plugin here

    postcss(),
  ],
};
