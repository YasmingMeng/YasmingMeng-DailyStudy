/*
 * @Description: 
 * @Date: 2022-02-25 10:46:44
 * @LastEditTime: 2022-03-02 16:22:43
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "@vue/airbnb",
    "@vue/typescript",
  ],
  rules: {
    /* https://eslint.org/docs/rules/ */
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-plusplus": "off",
    "max-len": "off",
    "import/no-cycle": "off",
    "no-restricted-syntax": "off",
    "no-bitwise": "off",
    "no-mixed-operators": "off",
    "no-nested-ternary": "off",
    "no-continue": "off",
    "func-names": "off",
    "prefer-promise-reject-errors": "off",
    "no-shadow": "off",
    "class-methods-use-this": "off",
    radix: "off",
    /* https://eslint.vuejs.org/rules/ */
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/no-reserved-keys": "off",
    "vue/prop-name-casing": "off",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    /* https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules */
    "@typescript-eslint/member-delimiter-style": ["error"],
    /* https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions */
    "import/extensions": ["off"],
    "import/resolver": ["off"],
    "import/no-unresolved": ["off"],
    "arrow-body-style": ["off", "never"],
    "no-empty-function": ["off"],
    "no-useless-constructor": ["off"],
    "no-underscore-dangle": ["off"],
    "no-param-reassign": ["off"],
    "max-classes-per-file": ["off"],
    "import/prefer-default-export": ["off"],
    "prefer-destructuring": ["off"],
    "vue/no-v-html": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
