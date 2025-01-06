module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-ember-template-tag'],
  overrides: [
    {
      files: '*.{gjs,gts}',
      options: {
        templateSingleQuote: false
      }
    },
    {
      files: '*.hbs',
      options: {
        singleQuote: false
      }
    }
  ]
};
