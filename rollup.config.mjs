import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.mjs',
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    json() // Add the JSON plugin here
  ]
};
