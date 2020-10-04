import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'build',
        format: 'cjs',
    },
    plugins: [
        del({
            targets: 'build/*'
        }),
        typescript(), 
        babel({ 
            babelHelpers: 'bundled' 
        }),
        terser(),
    ],
  };