module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  ignorePatterns: [
    'node_modules/*',
    '.next/*',
    'out/*',
    'public/*',
    '!.prettierrc.js',
  ],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        // Once all @ts-ignore is removed, we will remove this setting as well.
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
