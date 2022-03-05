module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    collectCoverage: true,
    coverageDirectory: './coverage',
    testMatch: ['<rootDir>/src/**/*.spec.ts']
  };