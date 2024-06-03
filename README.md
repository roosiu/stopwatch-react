# Stopwatch - React project

The Stopwatch - React project is a time tracking application built using React, a popular JavaScript library for building user interfaces. The provided code snippet is an excerpt from the project's ESLint configuration file, which is a tool used to detect and report code quality issues in JavaScript and TypeScript code.

The code snippet suggests expanding the ESLint configuration to enable type-aware lint rules for a production application. This is done by updating the parserOptions property to include the project field, which points to the TypeScript configuration files (tsconfig.json and tsconfig.node.json). Additionally, the plugin:@typescript-eslint/recommended rule is replaced with either plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked to enable type-checked linting. Optionally, the plugin:@typescript-eslint/stylistic-type-checked rule can be added for additional stylistic type-checking.

Furthermore, the code snippet recommends installing the eslint-plugin-react package and adding plugin:react/recommended and plugin:react/jsx-runtime to the extends list to enable linting for React code.

In summary, the Stopwatch - React project is a time tracking application built with React, and its ESLint configuration is designed to enforce code quality and consistency by detecting and reporting potential issues in the codebase.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
