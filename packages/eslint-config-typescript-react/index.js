module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: { browser: true },
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  settings: { react: { version: "17.0" } },
  rules: {
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "prefer-const": "error",
    "react/prop-types": 0,
    "@typescript-eslint/no-useless-constructor": 1,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
  },
};
