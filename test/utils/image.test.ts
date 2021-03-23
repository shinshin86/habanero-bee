import { isExternalImage } from '@/utils/image';

describe('isExternalImage', (): void => {
  test('Should returns true if the image is external.', (): void => {
    expect(
      isExternalImage('<img src="http://example.com" alt="test" />')
    ).toBeTruthy();
  });

  test('Should returns false if the image is not external.', (): void => {
    expect(
      isExternalImage('<img src="/images/no-image.png" alt="test" />')
    ).toBeFalsy();
  });

  test('Should throw error if URL of image is not set in img tag.', (): void => {
    expect(() => isExternalImage('<img src="" alt="test" />')).toThrow(
      'Error: URL of image is not set in img tag'
    );
  });
});
