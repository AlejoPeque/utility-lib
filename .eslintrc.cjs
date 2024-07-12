// yarn add -D eslint-plugin-import-simple-sort
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["simple-import-sort"],
  ignorePatterns: [
    ".eslintrc.cjs",
    "dist",
    "node_modules",
    "commitlint.config.cjs",
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    eqeqeq: "error",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "arrow-body-style": "error",
    "no-implicit-coercion": "error",
    "no-return-await": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "eol-last": ["error", "always"],
    quotes: ["error", "single"],
    "space-in-parens": ["error", "never"],
    semi: ["error", "never"],
  },
}
