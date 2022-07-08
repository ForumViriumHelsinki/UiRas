module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "es2021": true
  },
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", ".ts", ".tsx"]}]
  },
  "settings": {
    "react": {
      "version": "detect"
    },
  },
};
