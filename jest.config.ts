import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageDirectory: 'coverage/sample-cs-ui',
  coverageReporters: ['html', 'text-summary', 'lcovonly'],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 45,
      functions: 75,
      lines: 85,
    },
  },
};

export default config;
