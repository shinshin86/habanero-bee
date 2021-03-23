/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

export const fetchHTMLImg = async (imgTag: string): Promise<string> => {
  const url = imgTag.match(/src=["|'](.*?)["|']/)
    ? // @ts-ignore
      imgTag.match(/src=["|'](.*?)["|']/)[1]
    : '';

  if (!url) {
    throw new Error('Error: URL of image is not set in img tag');
  }

  const response = await fetch(url);

  // @ts-ignore
  const buffer = await response.buffer();
  const hashedImageName = getHashImageName(url);
  const imagePath = `/images/${hashedImageName}`;
  await fs.writeFile(`./public${imagePath}`, buffer);

  return imagePath;
};

export const fetchImage = async (url: string): Promise<string> => {
  const response = await fetch(url);

  // @ts-ignore
  const buffer = await response.buffer();
  const hashedImageName = getHashImageName(url);
  const imagePath = `/images/${hashedImageName}`;
  await fs.writeFile(`./public${imagePath}`, buffer);

  return imagePath;
};

export const isExternalImage = (imgTag: string): boolean => {
  const url = imgTag.match(/src=["|'](.*?)["|']/)
    ? // @ts-ignore
      imgTag.match(/src=["|'](.*?)["|']/)[1]
    : '';

  if (!url) {
    throw new Error('Error: URL of image is not set in img tag');
  }

  return url.indexOf('http') === 0;
};

const getHashImageName = (name: string): string => {
  const ext = path.extname(name);
  return `${crypto.createHash('md4').update(name).digest('hex')}${ext}`;
};
