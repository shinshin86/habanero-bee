import markdownIt from 'markdown-it';
const mi = markdownIt({ breaks: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const img2AmpImg = require('img2amp-img');
const replaceAsync = require('string-replace-async');
/* eslint-enable @typescript-eslint/no-var-requires */

export const getDescriptionText = (text: string | undefined): string => {
  if (!text) return '';

  if (text.length <= 100) {
    return text;
  } else {
    return text.slice(0, 100) + '...';
  }
};

export const renderHTML = (markdownText: string): string => {
  const renderedText = mi.render(markdownText).replace(/\n/g, '');
  const regexH1 = /<h1>/;
  const regexH2 = /<h2>/;

  if (regexH1.test(renderedText)) {
    console.warn(
      'Warn: Do not use descriptions that convert to h1 tags, as this will generate sites that are not SEO correct.'
    );
  }

  if (regexH2.test(renderedText)) {
    console.warn(
      'Warn: Do not use descriptions that convert to h2 tags, as this will generate sites that are not SEO correct.'
    );
  }

  return renderedText;
};

export const getTextContent = (markdownText: string): string => {
  const regex = /(<([^>]+)>)/gi;
  return renderHTML(markdownText).replace(/<br>/g, '\n').replace(regex, '');
};

export const getMetaDescriptionText = (markdownText: string): string => {
  return getTextContent(markdownText).replace(/\n/g, '');
};

export const convertAmpImg = async (html: string): Promise<string> => {
  const ampImg = await replaceAsync(
    html,
    /<img(.|\s)*?>/gi,
    async (match: string) => {
      const ampImg = await img2AmpImg(match);
      return ampImg;
    }
  );

  return ampImg;
};
