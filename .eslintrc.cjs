module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  plugins: [
    'import'
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  rules: {
    "react/prop-types": 0
  }
};
