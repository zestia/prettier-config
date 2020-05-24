module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
        parser: 'glimmer'
      }
    }
  ]
};
