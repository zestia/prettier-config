# @zestia/prettier-config

This package provides a common Prettier configuration, so that all projects have consistent code formatting.

## Installation

```
npm install --save-dev @zestia/prettier-config
```

## Setup

Create the following file `.prettierrc.js`

```javascript
module.exports = require('@zestia/prettier-config');
```

## Running

As this package only provides the Prettier configuration, it is assumed you already have `prettier` installed in your project.

* It's recommended to install the relevant Editor Addons/Plugins and enable "Pretter on Save".

* It's recommended to add a prettier script to `package.json`. An example one is:

    ```json
    scripts: {
      "prettier": "prettier '**/*.{js,json,css,scss,html,md}' --write"
    }
    ```
    You can then run the following, to automatically format your project's code:
    ```
    npm run prettier
    ```

## Related repos

* https://github.com/zestia/prettier-config
* https://github.com/zestia/eslint-config
* https://github.com/zestia/stylelint-config
* https://github.com/zestia/ember-template-lint-plugin