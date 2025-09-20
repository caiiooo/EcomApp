import js from "@eslint/js";
import ts from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["node_modules", "dist", "build"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];
