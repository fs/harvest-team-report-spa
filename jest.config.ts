module.exports = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/enzyme.config.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/__tests__/helpers'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
    '\\.svg': '<rootDir>/__mocks__/svgrMock.ts',
  },
};
