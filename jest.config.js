module.exports = {
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setupTests.ts',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.spec.tsx',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx',
  ],
  coverageReporters: ['lcov', 'json'],
}
