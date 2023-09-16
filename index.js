module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-ember-template-tag'],
  overrides: [
    {
      files: '*.{js,ts,gjs,gts}',
      options: {
        singleQuote: true
      }
    },
    {
      files: '*.hbs',
      options: {
        singleQuote: false
      }
    },
    {
      files: '*.{gjs,gts}',
      options: {
        parser: 'ember-template-tag',
        singleQuote: true,
        templateSingleQuote: false
      }
    }
  ]
};
