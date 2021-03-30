import { getExternalLinks, ExternalLink } from '@/utils/external-link';

describe('getExternalLinks', (): void => {
  test('Should return externalLinks.', (): void => {
    const url = 'https://example.com';
    const text = 'example1';

    const externalLinks: Array<ExternalLink> = getExternalLinks(url, text);

    expect(externalLinks[0].url).toBe('https://example.com');
    expect(externalLinks[0].text).toBe('example1');
    expect(externalLinks.length).toBe(1);
  });

  test('Should return externalLinks. (Multiple cases)', (): void => {
    const url = 'https://example.com, https://example.net';
    const text = 'example1,example 2';

    const externalLinks: Array<ExternalLink> = getExternalLinks(url, text);

    expect(externalLinks[0].url).toBe('https://example.com');
    expect(externalLinks[1].url).toBe('https://example.net');
    expect(externalLinks[0].text).toBe('example1');
    expect(externalLinks[1].text).toBe('example 2');
    expect(externalLinks.length).toBe(2);
  });

  test('Should throw error, if number of url and text is diffrent.', (): void => {
    const url = 'https://example.com, https://example.net';
    const text = 'example1';

    expect(() => getExternalLinks(url, text)).toThrow(
      'Number of  URL and the texts is different.'
    );
  });

  test('Should throw error, if empty url or text is entered.', (): void => {
    const url = '';
    const text = 'example1';

    expect(() => getExternalLinks(url, text)).toThrow(
      'An empty URL or text is entered.'
    );
  });
});
