export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/****/*.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  modulePathIgnorePatterns: ['<rootDir>/src/interfaces'],
  passWithNoTests: true
  // testEnvironment: 'node'
}

// spec - TEST UNIT
// test - TEST INTEGRATION
