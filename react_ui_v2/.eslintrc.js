module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "@typescript-eslint",
    "jsx-a11y",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
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
