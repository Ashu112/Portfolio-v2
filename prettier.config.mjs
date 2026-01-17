// prettier.config.mjs
/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 80,
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
