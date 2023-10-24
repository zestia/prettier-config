# @zestia/prettier-config

This package provides a common Prettier configuration, so that all projects have consistent code formatting.

## Installation

```
npm install --save-dev @zestia/prettier-config
```

Add the following to `~/.npmrc` to pull @zestia scoped packages from Github instead of NPM.

```
@zestia:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GH_TOKEN>
```

## Setup

1. Create the following file `.prettierrc.js`

   ```javascript
   module.exports = require('@zestia/prettier-config');
   ```

2. Add the following to `scripts` in `package.json`

   ```
   "prettier": "prettier '**/*.{js,json,css,scss,html,hbs,md}' --write"
   ```

3. Install the relevant Editor Addon/Plugin and enable "Prettier on Save".

## Running

```
npm run prettier
```

## Notes

- `prettier-plugin-ember-template-tag` for support of .gjs files

## Related repos

- https://github.com/zestia/prettier-config
- https://github.com/zestia/eslint-config
- https://github.com/zestia/stylelint-config
- https://github.com/zestia/template-lint-config
