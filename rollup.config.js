// Import rollup plugins
import html from "@web/rollup-plugin-html";
import { copy } from "@web/rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals";
import summary from "rollup-plugin-summary";
import babel from '@rollup/plugin-babel';
export default {
  plugins: [
    // Entry point for application build; can specify a glob to build multiple
    // HTML files for non-SPA app
    html({
      input: ["src/index.html","src/share.html"],
      format: "esm",
      publicPath: "/static/",
    }),
    // Resolve bare module specifiers to relative paths
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude:'node_modules/**'
    }),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    /*
    terser({
      ecma: 2020,
      module: false,
      warnings: true,
    }),*/
    // Print bundle summary
    // Optional: copy any static assets to build directory
    summary(),	  
  ],
  output: {
    dir: "build",
  },
  preserveEntrySignatures: "strict",
};
