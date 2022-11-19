module.exports = {
    parser: '@babel/eslint-parser',
    env: {
      node: true,
      es6: true,
      browser: true
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      requireConfigFile: false,
      ecmaFeatures: {
        jsx: true,
        modules: true,
        experimentalObjectRestSpread: true
      },
      babelOptions: {
        presets: ['@babel/preset-react']
      }
    },
  
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      semi: ['error', 'never'],
      'max-len': 'off',
      camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }]
    }
  }
  