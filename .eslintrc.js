module.exports = {
  extends: 'eslint-config-ali/typescript/react',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __static: true,
  },
}
