module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "globals": {
    "firebase": true
  },
  "extends": [
    "eslint:recommended", // eslint
    "plugin:import/errors", // eslint-plugin-import
    "plugin:import/warnings", // eslint-plugin-import
    "plugin:react/recommended" // eslint-plugin-react
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react" // eslint-plugin-react
  ],
  "rules": {
    "no-console": 0,
    "no-unused-vars": 1,
    "jsx-a11y/click-events-have-key-events": 0
  }
};
