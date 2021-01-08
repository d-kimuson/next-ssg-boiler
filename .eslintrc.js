module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    quotes: "off",
    '@typescript-eslint/quotes': [
      2,
      'backtick',
      {
        avoidEscape: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
