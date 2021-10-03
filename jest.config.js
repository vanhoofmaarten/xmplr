const sharedConfig = {
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default {
  projects: [
    {
      displayName: "unit",
      roots: ["src", "tests/unit"],
      collectCoverage: true,
      collectCoverageFrom: ["src/**/*.{ts,tsx}", "!dist/", "!tests/"],
      ...sharedConfig,
    },
    {
      displayName: "integration",
      roots: ["src", "tests/integration"],
      ...sharedConfig,
    },
  ],
};
