module.exports = {
  trailingComma: 'none',
  plugins: ['prettier-plugin-ember-template-tag'],
  overrides: [
    {
      files: '*.{css,scss}',
      options: {
        singleQuote: true
      }
    },
    {
      files: '*.{js,gjs,ts,gts,mjs,mts,cjs,cts}',
      options: {
        singleQuote: true
      }
    },
    {
      files: '*.{gjs,gts}',
      options: {
        singleQuote: true,
        templateSingleQuote: false
      }
    }
  ]
};
