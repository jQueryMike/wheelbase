import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

export default async (): Promise<JestConfigWithTsJest> => ({
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: [
    '**/components/**/*.test.[jt]s?(x)',
    '**/utilities/**/*.test.[jt]s',
    '<rootDir>/app/_components/**/*.test.[jt]s?(x)',
    '<rootDir>/app/_hooks/**/*.test.[jt]s?(x)',
    '<rootDir>/app/_utils/**/*.test.[jt]s?(x)',
  ],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/.jest/__mocks__/styleMock.js',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  },
});
