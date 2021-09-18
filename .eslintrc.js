module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier', 'next', 'next/core-web-vitals' ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier', 'next'],
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        '@next/next/link-passhref': 'off',
      },
    },
  ],
};