module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      //同ファイルからのエクスポートは警告
      'warn',
    ],
    'react/function-component-definition': [
      //関数コンポーネントはアロー関数で定義
      'error',
      { namedComponents: 'arrow-function' },
    ],
    '@typescript-eslint/no-explicit-any': 'error', //any禁止
    'no-console': [
      //consoleは警告 ただし、warnとerrorは許可
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['strictCamelCase','StrictPascalCase','UPPER_CASE']
      },
      {
        //boolean型の変数とboolean型を返す関数は接頭語指定
        selector: ['variable', 'function'],
        types: ['boolean'],
        format: ['StrictPascalCase'],
        prefix: ['is', 'has'],
      },
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: ['variable', 'parameter', 'method', 'property', 'typeParameter'],
        format: ['strictCamelCase'],
      },
      {
        selector: ['class', 'interface', 'typeAlias'],
        format: ['StrictPascalCase'],
      },
    ],
  },
};
