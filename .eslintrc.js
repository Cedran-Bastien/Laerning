module.exports = {
    extends: [
      'airbnb', 
      'airbnb/hooks',
      'plugin:react/jsx-runtime'
    ],
    parserOptions: {
      ecmaVersion: 8,
      sourceType: "module",
    },
    rules: {
      'react/jsx-filename-extension': [
        1,
        { 
          "extensions": [
            ".js",
            ".jsx",
          ] 
        }
      ],
      'react/jsx-props-no-spreading' : 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'max-len': 'off'
    },
    
  };