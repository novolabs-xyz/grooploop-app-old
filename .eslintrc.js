module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   parser: '@typescript-eslint/parser',
   extends: [
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:prettier/recommended',
      'eslint-config-prettier',
   ],
   plugins: ['@typescript-eslint', 'react', 'prettier'],
   rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   ignorePatterns: ['node_modules/', 'public/', 'build/', 'dist/'],
}
