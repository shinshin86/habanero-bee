import { getBrandIcon } from '@/utils/icon';

describe('getBrandIcon', (): void => {
  test('Should return string of corresponding className - twitter', (): void => {
    const expectedText = 'icon brands fa-twitter';
    expect(getBrandIcon('twitter')).toBe(expectedText);
  });

  test('Should return string of corresponding className - instagram', (): void => {
    const expectedText = 'icon brands fa-instagram';
    expect(getBrandIcon('instagram')).toBe(expectedText);
  });

  test('Should return string of corresponding className - facebook', (): void => {
    const expectedText = 'icon brands fa-facebook';
    expect(getBrandIcon('facebook')).toBe(expectedText);
  });

  test('Should return string of corresponding className - github', (): void => {
    const expectedText = 'icon brands fab fa-github';
    expect(getBrandIcon('github')).toBe(expectedText);
  });

  test('Should return string of corresponding className - tumblr', (): void => {
    const expectedText = 'icon brands fa-tumblr';
    expect(getBrandIcon('tumblr')).toBe(expectedText);
  });

  test('Should return string of corresponding className - patreon', (): void => {
    const expectedText = 'icon brands fab fa-patreon';
    expect(getBrandIcon('patreon')).toBe(expectedText);
  });

  test('Should return string of corresponding className - quora', (): void => {
    const expectedText = 'icon brands fab fa-quora';
    expect(getBrandIcon('quora')).toBe(expectedText);
  });

  test('Should return string of corresponding className - website', (): void => {
    const expectedText = 'icon fas fa-compass';
    expect(getBrandIcon('website')).toBe(expectedText);
  });

  test('Should throw Error if not expected arguments to function.', (): void => {
    expect(() => getBrandIcon('test')).toThrow();
  });
});
