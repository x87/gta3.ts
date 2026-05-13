// https://github.com/levirrd/eslint-example

import plugin from './.config/eslint.js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
    {
        files: ['**/*.{ts,mts}'],
        languageOptions: {
            parser: tseslint.parser,
        },
        plugins: {
            plugin,
        },
        rules: {
            'plugin/require-wait-in-while': 'error',
            'plugin/no-wrong-wait-in-function': 'error',
        },
    },
]);
