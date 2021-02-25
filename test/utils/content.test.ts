import {
  getDescriptionText,
  renderHTML,
  getTextContent,
  getMetaDescriptionText,
} from '@/utils/content';

describe('getDescriptionText', (): void => {
  test('Should return same string, if string does not exceed 30 characters.', (): void => {
    const text = '123456789012345678901234567890';
    expect(getDescriptionText(text)).toBe(text);
  });

  test('Should cut the string at 30 characters and use "...", if string does exceed 30 characters.', (): void => {
    const text = '1234567890123456789012345678901';
    const expectedText = '123456789012345678901234567890...';
    expect(getDescriptionText(text)).toBe(expectedText);
  });
});

describe('renderHTML', (): void => {
  test('Should return converted HTML from markdown.', (): void => {
    const mdText = '### test';
    const expectedHTML = `<h3>test</h3>`;
    expect(renderHTML(mdText)).toBe(expectedHTML);
  });

  test('Should convert to br tags from line breaks in markdown.', (): void => {
    const mdText = `AA
BB
CC`;
    const expectedHTML = `<p>AA<br>BB<br>CC</p>`;
    expect(renderHTML(mdText)).toBe(expectedHTML);
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
