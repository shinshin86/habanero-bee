import markdownIt from 'markdown-it';
import { getDownloadedHTMLImagePath, isExternalImage } from '@/utils/image';
const mi = markdownIt({ breaks: true, html: true });
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

export const renderAmpHTML = async (markdownText: string): Promise<string> => {
  const renderedHTML = mi.render(markdownText).replace(/\n/g, '');
  const regexH1 = /<h1>/;
  const regexH2 = /<h2>/;

  if (regexH1.test(renderedHTML)) {
    console.warn(
      'Warn: Do not use descriptions that convert to h1 tags, as this will generate sites that are not SEO correct.'
    );
  }

  if (regexH2.test(renderedHTML)) {
    console.warn(
      'Warn: Do not use descriptions that convert to h2 tags, as this will generate sites that are not SEO correct.'
    );
  }

  const imgList = renderedHTML.match(/<img(.|\s)*?>/gi);
  const renderedAmpHTML = !imgList
    ? renderedHTML
    : await convertAmpImg(renderedHTML);

  // Since it has already been converted from markdown to HTML, I am looking for <code>youtube:~</code>.
  const youtubeLinkList = renderedAmpHTML.match(/<code>youtube:.*?<\/code>/gi);

  return !youtubeLinkList
    ? renderedAmpHTML
    : await convertAmpYoutube(renderedAmpHTML);
};

export const getTextContent = (markdownText: string): string => {
  const regex = /(<([^>]+)>)/gi;
  return mi
    .render(markdownText)
    .replace(/\n/g, '')
    .replace(/<br>/g, '\n')
    .replace(regex, '');
};

export const getMetaDescriptionText = (markdownText: string): string => {
  return getTextContent(markdownText).replace(/\n/g, '');
};

export const convertAmpImg = async (html: string): Promise<string> => {
  const ampImg = await replaceAsync(
    html,
    /<img(.|\s)*?>/gi,
    async (match: string) => {
      if (isExternalImage(match)) {
        const imagePath = await getDownloadedHTMLImagePath(match);

        const ampImg = await img2AmpImg(
          match.replace(/src=["|'](.*?)["|']/, `src="./public${imagePath}"`)
        );

        return ampImg.replace(/src=["|'](.*?)["|']/, `src="${imagePath}"`);
      } else {
        const ampImg = await img2AmpImg(match);
        return ampImg;
      }
    }
  );

  return ampImg;
};

const getAmpYoutubeTag = (youtubeLink: string): string => {
  const url = new URL(youtubeLink);
  if (url.origin === 'https://www.youtube.com') {
    return `<amp-youtube width="480"
height="270"
layout="responsive"
data-videoid="${url.searchParams.get('v')}">
</amp-youtube>`;
  } else if (url.origin === 'https://youtu.be') {
    return `<amp-youtube width="480"
height="270"
layout="responsive"
data-videoid="${url.pathname.slice(1)}">
</amp-youtube>`;
  } else {
    throw new Error('Invalid YouTube URL found');
  }
};

const convertAmpYoutube = async (html: string): Promise<string> => {
  // Since it has already been converted from markdown to HTML, I am looking for <code>youtube:~</code>.
  const convertedHTML = await replaceAsync(
    html,
    /<code>youtube:.*?<\/code>/gi,
    async (match: string) => {
      const youtubeUrl = match
        .replace('<code>', '')
        .replace('</code>', '')
        .replace('youtube:', '');

      return getAmpYoutubeTag(youtubeUrl);
    }
  );

  return convertedHTML;
};
