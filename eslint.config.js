import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      // Ignore variáveis e parâmetros iniciando com letra maiúscula (ex.: Icon em JSX)
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^[A-Z_]",
          argsIgnorePattern: "^[A-Z_]",
        },
      ],
    },
  },
  // Tratar arquivos de configuração como ambiente Node para evitar 'module is not defined'
  {
    files: ["tailwind.config.js", "vite.config.js", "eslint.config.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
]);
