module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-ember-template-tag'],
  overrides: [
    {
      files: '*.{js,ts,gjs,gts}',
      options: {
        singleQuote: true,
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
