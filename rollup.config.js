import { uglify } from 'rollup-plugin-uglify'
import es3 from 'rollup-plugin-es3'
import babel from '@rollup/plugin-babel'
import filesize from 'rollup-plugin-filesize'
import buble from '@rollup/plugin-buble' // For transpiling ES6 to ES5

export default [
  {
    input: 'src/deep-proxy.js',
    output: {
      file: 'dist/deep-proxy.bundle.js',
      format: 'cjs'
    },
    treeshake: false,
    plugins: [
      babel(),
      buble({ transforms: { forOf: false } }),
      es3(),
      uglify(),
      filesize({ showGzippedSize: false }),
    ],
  },
]