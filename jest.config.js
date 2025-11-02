/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",

  // This runs after Jest is ready
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleFileExtensions: ["js", "jsx", "json"],
};

module.exports = config;
