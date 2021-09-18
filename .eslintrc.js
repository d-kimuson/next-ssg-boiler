module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-console": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["**/*.d.ts"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./**/tsconfig.json",
        sourceType: "module",
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      plugins: ["react", "@typescript-eslint"],
      rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
}
