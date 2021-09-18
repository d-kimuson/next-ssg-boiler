const { pathsToModuleNameMapper } = require("ts-jest/utils")
const {
  readConfigFile,
  parseJsonConfigFileContent,
  sys,
} = require("typescript")

// require で拾うとコメントが syntax error になるので
const configFile = readConfigFile("./tsconfig.json", sys.readFile)
if (typeof configFile.error !== "undefined") {
  throw new Error(`Failed to load tsconfig: ${configFile.error}`)
}

const { options } = parseJsonConfigFileContent(
  configFile.config,
  {
    fileExists: sys.fileExists,
    readFile: sys.readFile,
    readDirectory: sys.readDirectory,
    useCaseSensitiveFileNames: true,
  },
  __dirname
)

module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  globals: {
    "ts-jest": {
      tsconfig: "tests/tsconfig.json",
    },
  },
  transform: {
    "^.+\\.(t|j)s$": "esbuild-jest",
  },
  moduleNameMapper: pathsToModuleNameMapper(options.paths, {
    prefix: "<rootDir>/src",
  }),
}
