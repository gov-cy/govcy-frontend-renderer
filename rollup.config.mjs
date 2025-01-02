import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

const nodeConfig = {
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

const browserConfig = {
  input: 'src/govcyFrontendRendererBrowser.mjs',
  output: [
    {
      file: 'dist/govcyFrontendRenderer.browser.js',
      format: 'iife',
      name: 'GovcyFrontendRendererBrowser'
    }
  ],
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    json() // Add the JSON plugin here
  ]
};

export default [browserConfig, nodeConfig];