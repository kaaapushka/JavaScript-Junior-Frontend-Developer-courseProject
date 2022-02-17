// module.exports = {
//     env: {
//         browser: true,
//         es2021: true,
//     },
//     extends: ['plugin:react/recommended', 'standard'],
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true,
//         },
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//     },
//     plugins: ['react'],
//     rules: {
//         indent: ['error', 4],
//         semi: [2, 'always'],
//         'space-before-function-paren': [
//             'error',
//             { anonymous: 'always', named: 'never' },
//         ],
//         quotes: ['error', 'single', { allowTemplateLiterals: true }],
//         'comma-dangle': ['error', 'always-multiline'],
//         'no-unneeded-ternary': ['error', { defaultAssignment: true }],
//     },
// };

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        semi: [2, 'always'],
        indent: [0, 4],
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never' }
        ],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true
            }
        ]
    }
};
