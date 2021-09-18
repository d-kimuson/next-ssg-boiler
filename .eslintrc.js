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
      plugins: ["react", "import", "@typescript-eslint"],
      settings: {
        react: {
          version: "detect",
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
          webpack: {
            config: {
              resolve: {
                extensions: [".scss"],
              },
            },
          },
        },
      },
      rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/no-explicit-any": [
          "error",
          {
            fixToUnknown: true,
          },
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "type",
              "internal",
              "parent",
              "index",
              "sibling",
              "object",
              "unknown",
            ],
            pathGroups: [
              // 上に書いたものが上に並ぶ
              {
                pattern: "@/**",
                group: "internal",
                position: "before",
              },
              {
                pattern: "~/**",
                group: "internal",
                position: "before",
              },
            ],
            alphabetize: {
              order: "asc",
            },
            "newlines-between": "never",
          },
        ],
      },
    },
  ],
}
