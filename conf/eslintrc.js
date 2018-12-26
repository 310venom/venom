module.exports = {
  extends: ['eslint-config-gnavi'],
  parser: 'babel-eslint',
  env: {
    // 使用環境設定
    browser: true,
    'jquery': true
  },
  globals: {
    // global変数許可設定
    gNaviGlobalState: true,
    google: true,
  },
  rules: {
    // use strictを許可
    'strict': 0,
    // console メソッドを警告
    'no-console': 1,
    'no-invalid-this': 0,
    'consistent-return': 0,
    'no-magic-numbers': 0,
    'prefer-arrow-callback': 0,
  },
};
