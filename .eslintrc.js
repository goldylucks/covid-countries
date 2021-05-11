module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    // 'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'import',
    // '@typescript-eslint',
  ],
  rules: {
    // '@typescript-eslint/no-unused-vars': 0,
    'prefer-const': 2,
    'require-await': 2,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'sibling',
          'parent',
        ],
        'newlines-between': 'always',
      },
    ],
  },
  // parser: '@typescript-eslint/parser',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
  },
  env: {
    es2021: true,
    node: true,
  },
}
