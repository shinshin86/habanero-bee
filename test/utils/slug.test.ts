import { getSlugText } from '@/utils/slug';

describe('getSlugText', (): void => {
  test('Should return text all lowercase.', (): void => {
    expect(getSlugText('TEST')).toBe('test');
  });

  test('Should return text all lowercase. (If the arguments is all lowercase)', (): void => {
    expect(getSlugText('test')).toBe('test');
  });

  test('Should return text all lowercase and trimmed.', (): void => {
    expect(getSlugText(' TEST ')).toBe('test');
  });

  test('Should return text trimmed.', (): void => {
    expect(getSlugText(' test ')).toBe('test');
  });

  test('Should return empty string, if the arguments is empty string.', (): void => {
    expect(getSlugText('')).toBe('');
  });
});
