module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "warn",
      {
        "printWidth": 100,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "jsxSingleQuote": false,
        "trailingComma": "all",
        "bracketSpacing": false,
        "jsxBracketSameLine": false,
        "arrowParens": "avoid",
        "htmlWhitespaceSensitivity": "ignore"
      }
    ],
  },
}
