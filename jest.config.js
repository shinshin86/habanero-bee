module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testMatch: ['**/test/**/*.test.ts'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
};
