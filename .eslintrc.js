module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    "comma-dangle": 0,
    quotes: 0,
    indent: ["error", 2, { SwitchCase: 1 }],
    "semi-spacing": 0,
    "no-use-before-define": [
      "error",
      { functions: true, classes: false, variables: false },
    ],
    "no-mixed-spaces-and-tabs": ["error"],
    "flowtype/require-valid-file-annotation": [2, "always"],
    "eol-last": 0,
    "jest/no-focused-tests": "error",
    "no-use-before-define": 0,
    "react/jsx-indent-props": 0,
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "jest/no-disabled-tests": "warn",
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": 0,
    "no-shadow": 0,
    "react-hooks/exhaustive-deps": 0,
  },
};
