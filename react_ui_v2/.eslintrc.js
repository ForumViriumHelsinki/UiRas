module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "jsx-a11y", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
