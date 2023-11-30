module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "next/core-web-vitals",
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-constructed-context-values": "off",
    "max-len": "off",
    "import/no-unresolved": "off",
  },
};
