/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

const imgTagRegex = /src=["|'](.*?)["|']/;

export const getDownloadedHTMLImagePath = async (
  imgTag: string
): Promise<string> => {
  const url = imgTag.match(imgTagRegex)
    ? // @ts-ignore
      imgTag.match(imgTagRegex)[1]
    : '';

  if (!url) {
    throw new Error('Error: URL of image is not set in img tag');
  }

  const imagePath = await downloadImage(url);
  return imagePath;
};

export const getDownloadedImagePath = async (url: string): Promise<string> => {
  const imagePath = await downloadImage(url);
  return imagePath;
};

export const isExternalImage = (imgTag: string): boolean => {
  const url = imgTag.match(imgTagRegex)
    ? // @ts-ignore
      imgTag.match(imgTagRegex)[1]
    : '';

  if (!url) {
    throw new Error('Error: URL of image is not set in img tag');
  }

  return url.indexOf('http') === 0;
};

const downloadImage = async (url: string): Promise<string> => {
  const response = await fetch(url);

  // @ts-ignore
  const buffer = await response.buffer();
  const hashedImageName = getHashImageName(url);
  const imagePath = `/images/${hashedImageName}`;

  // save image
  await fs.writeFile(`./public${imagePath}`, buffer);

  return imagePath;
};

const getHashImageName = (name: string): string => {
  const ext = path.extname(name);
  return `${crypto.createHash('md4').update(name).digest('hex')}${ext}`;
};
