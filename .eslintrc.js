module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2018,
      sourceType: "module"
    }
  },
  rules: {}
};
