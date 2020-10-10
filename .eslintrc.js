module.exports = {
  extends: 'eslint-config-ali/typescript/react',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/semi': [2, 'never']
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    __static: true
  }
}