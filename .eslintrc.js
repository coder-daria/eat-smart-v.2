const OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
  "settings": {
    "react": {
      "pragma": "React",
      "version": "16.5.2"
    }
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false,
    "ecmaFeatures": {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
      arrowFunction: true
     }
  },
  "plugins": ["react"],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },
 "rules":{
    "react/jsx-filename-extension": [WARN, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": [WARN],
    "indent": ["error", ERROR],
    "quotes": ["error", "single"],
  }
};
