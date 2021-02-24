module.exports = {
  '**/*.ts?(x)': () => 'yarn type-check',
  '**/*.(ts|js)?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,
};
