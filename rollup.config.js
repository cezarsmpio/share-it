import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'lib/index.js',
    output: {
        file: 'src/shareit.dist.js',
        format: 'iife',
    },
    plugins: [
        babel(),
        uglify(),
    ]
};
