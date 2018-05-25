module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
    'prettier',
  ],
  rules: {
    // rules override
    'class-methods-use-this': [0],
    'import/no-extraneous-dependencies': [0],

    // production only rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
