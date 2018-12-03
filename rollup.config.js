import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import pkg from './package.json';

module.exports = {
  input: 'src/index.ts',
  output: {
    name: 'paken',
    file: pkg.main,
    format: 'cjs',
  },
  plugins: [
    json(),
    typescript({
      tsconfig: "tsconfig.json"
    }),
    nodeResolve({
      jsnext: true,
      main: true,
    }),
    commonjs(),
  ],
};
