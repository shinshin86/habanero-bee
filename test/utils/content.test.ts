import {
  getDescriptionText,
  renderAmpHTML,
  getTextContent,
  getMetaDescriptionText,
  convertAmpImg,
} from '@/utils/content';

describe('getDescriptionText', (): void => {
  test('Should return same string, if string does not exceed 30 characters.', (): void => {
    const text =
      '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
    expect(getDescriptionText(text)).toBe(text);
  });

  test('Should cut the string at 100 characters and use "...", if string does over 100 characters.', (): void => {
    const text =
      '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901';
    const expectedText =
      '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890...';
    expect(getDescriptionText(text)).toBe(expectedText);
  });

  test('Should return an empty character, If undefined is passed.', (): void => {
    expect(getDescriptionText(undefined)).toBeFalsy();
  });
});

describe('renderAmpHTML', (): void => {
  test('Should return converted AMP HTML from markdown.', async (): Promise<void> => {
    const mdText = `### test
![No Image](./public/images/no-image.png)

${'`youtube:https://www.youtube.com/watch?v=lBTCB7yLs8Y`'}

${'`youtube:https://youtu.be/lBTCB7yLs8Y`'}
`;
    const expectedHTML = `<h3>test</h3><p><amp-img
  alt="No Image"
  src="./public/images/no-image.png"
  width="515"
  height="515"
  layout="responsive"
></amp-img></p><p><amp-youtube width="480"
height="270"
layout="responsive"
data-videoid="lBTCB7yLs8Y">
</amp-youtube></p><p><amp-youtube width="480"
height="270"
layout="responsive"
data-videoid="lBTCB7yLs8Y">
</amp-youtube></p>`;

    const html = await renderAmpHTML(mdText);
    expect(html).toBe(expectedHTML);
  });

  test('Should convert to br tags from line breaks in markdown.', async (): Promise<void> => {
    const mdText = `AA
BB
CC`;
    const expectedHTML = `<p>AA<br>BB<br>CC</p>`;
    const html = await renderAmpHTML(mdText);
    expect(html).toBe(expectedHTML);
  });

  test('Should throw error, if invalid URL.', async (): Promise<void> => {
    const mdText = `### test
![No Image](./public/images/no-image.png)

${'`youtube:error-url`'}

${'`youtube:https://youtu.be/lBTCB7yLs8Y`'}
`;

    await expect(renderAmpHTML(mdText)).rejects.toThrow('Invalid URL');
  });

  test('Should throw error, if invalid URL. (Pattern of Not YouTube URL)', async (): Promise<void> => {
    const mdText = `### test
![No Image](./public/images/no-image.png)

${'`youtube:http://example.com`'}

${'`youtube:https://youtu.be/lBTCB7yLs8Y`'}
`;

    await expect(renderAmpHTML(mdText)).rejects.toThrow(
      'Invalid YouTube URL found'
    );
  });
});

describe('getTextContent', (): void => {
  test('Should return plain text from markdown.', (): void => {
    const mdText = '### test';
    const expectedText = `test`;
    expect(getTextContent(mdText)).toBe(expectedText);
  });

  test('Should return plain text from markdown. And remove unnecessary line breaks.', (): void => {
    const mdText = `AA
BB
CC`;
    const expectedText = `AA
BB
CC`;
    expect(getTextContent(mdText)).toBe(expectedText);
  });
});

describe('getMetaDescriptionText', (): void => {
  test('Should return plain text from markdown. And remove all line breaks.', (): void => {
    const mdText = `AA
BB
CC`;
    const expectedText = `AABBCC`;
    expect(getMetaDescriptionText(mdText)).toBe(expectedText);
  });
});

describe('convertAmpImg', (): void => {
  test('Should return converted amp-img tag from img tag.', async (): Promise<void> => {
    const html =
      '<h3>test</h3><img src="./public/images/no-image.png" alt="No Image" />';
    const expectedHTML = `<h3>test</h3><amp-img
  alt="No Image"
  src="./public/images/no-image.png"
  width="515"
  height="515"
  layout="responsive"
></amp-img>`;
    const convertedHTML = await convertAmpImg(html);
    expect(convertedHTML).toBe(expectedHTML);
  });

  test('Should return same HTML, if no image tag.', async (): Promise<void> => {
    const convertedHTML = await convertAmpImg('<h3>test</h3>');
    const expectedHTML = '<h3>test</h3>';
    expect(convertedHTML).toBe(expectedHTML);
  });

  test('Should return empty string, if argument is empty string.', async (): Promise<void> => {
    const convertedHTML = await convertAmpImg('');
    const expectedHTML = '';
    expect(convertedHTML).toBe(expectedHTML);
  });
});
