const fs = require("fs")
const stripJsonComments = require("strip-json-comments")
const { pathsToModuleNameMapper } = require("ts-jest/utils")

// require で拾うとコメントが syntax error になるので
const { compilerOptions } = JSON.parse(
  stripJsonComments(fs.readFileSync("./tsconfig.json", "utf8"))
)

module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  globals: {
    "ts-jest": {
      tsconfig: "tests/tsconfig.json",
    },
  },
  preset: "ts-jest",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src",
  }),
}
