module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    indent: [ 'error', 2, ],
    quotes: [ 'error', 'single', ],
    'max-len': [ 'error', { code: 120, }, ],
    semi: [ 'error', 'never', ],
    'object-curly-spacing': [ 'error', 'always', ],
    'array-bracket-spacing': [ 'error', 'always', ],
    'no-trailing-spaces': 'error',
    'comma-dangle': [ 'error', {
      'arrays': 'always',
      'objects': 'always',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }, ],
  },
}
