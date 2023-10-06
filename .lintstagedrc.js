module.exports = {
  "*.md": ["markdownlint-cli2", "textlint"],
  "*.{md,html,json.yaml,yml,js,cjs,mjs,ts,jsx,tsx}": ["prettier --write"],
};
