// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/enzyme.config.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/_tests/helpers',
    '<rootDir>/.legacy',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/.mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/.mocks/styleMock.js',
    '\\.svg': '<rootDir>/.mocks/svgrMock.js',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
