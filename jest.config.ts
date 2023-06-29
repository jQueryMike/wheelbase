import type { Config } from '@jest/types';

const generateModuleNames = () => {
  const { paths } = require('./tsconfig.json').compilerOptions;

  return Object.keys(paths).reduce((acc, item) => {
    const key = item.replace('/*', '/(.*)');
    const path = paths[item][0].replace('/*', '/$1');
    return { ...acc, [key]: `<rootDir>/${path}` };
  }, {});
};

export default async (): Promise<Config.InitialOptions> => ({
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/components/**/*.test.[jt]s?(x)', '**/utilities/**/*.test.[jt]s'],
  roots: ['<rootDir>/lib'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
  },
  moduleNameMapper: {
    ...generateModuleNames(),
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
});
