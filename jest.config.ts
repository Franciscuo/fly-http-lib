export default {
  rootDir: './',
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    'jest.config.ts',
    '/.yalc/',
    '/dist/',
    'src/main.ts',
    '^.*\\.module\\.[jt]s?$',
    '^.*\\.config\\.[jt]s?$',
    '^.*\\.migration\\.[jt]s?$',
    '^.*\\.dto\\.[jt]s?$',
    '^.*\\index\\.[jt]s?$',
    '^.*\\.entity\\.[jt]s?$',
  ],
  testMatch: ['**/*.spec.ts'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 50,
      lines: 60,
      statements: 60,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  setupFiles: ['dotenv/config'],
};
