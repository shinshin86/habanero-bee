import { isValidUrl } from '@/utils/validate';

describe('isValidData', (): void => {
  test('Should return true, If url is valid. (http)', (): void => {
    const validURL = 'http://example.com';
    expect(isValidUrl(validURL)).toBeTruthy();
  });

  test('Should return true, If url is valid. (https)', (): void => {
    const validURL = 'https://example.com';
    expect(isValidUrl(validURL)).toBeTruthy();
  });

  test('Should return false, if url is invalid', (): void => {
    const invalidURL = 'htt://example.com';
    expect(isValidUrl(invalidURL)).toBeFalsy();
  });

  test('Should return false, if url is empty', (): void => {
    const emptyURL = '';
    expect(isValidUrl(emptyURL)).toBeFalsy();
  });
});
