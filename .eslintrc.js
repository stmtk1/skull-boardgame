module.exports = {
    extends: ["eslint:recommended"],
    plugins: [],
    parserOptions: {},
    env: {"browser": true},
    globals: {},
    rules: {
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "no-multi-spaces": ["error"],
    },
    parser: "@typescript-eslint/parser",
}
