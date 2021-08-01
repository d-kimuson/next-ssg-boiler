module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-scss"],
  rules: {
    // dart-sass だと use を先に使うので、不要なルール
    "no-invalid-position-at-import-rule": null,
  },
}
