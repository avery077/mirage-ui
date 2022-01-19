import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: `${packageJson.main}.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `${packageJson.module}.js`,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: [
      /node_modules/,
    ],
    plugins: [
      
      resolve(),
      babel({ 
        babelrc: false,
        exclude: 'node_modules/**',
        babelHelpers: 'bundled' 
      }),
      commonjs(),
      postcss(),
      terser(),
    ],
  },
];