// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const formatCommand = (filenames) =>
  `prettier ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")} --check`;

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, formatCommand],
};
