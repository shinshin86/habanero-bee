/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs').promises;
/* eslint-enable @typescript-eslint/no-var-requires */

export const fetchImage = async (imgTag: string): Promise<string> => {
  const url = imgTag.match(/src=["|'](.*?)["|']/)
    ? // @ts-ignore
      imgTag.match(/src=["|'](.*?)["|']/)[1]
    : '';

  if (!url) {
    throw new Error('Error: URL of image is not set in img tag');
  }

  const imageUrl = new URL(url);
  const splitedUrl = imageUrl.pathname.split('/');
  const filename = splitedUrl[splitedUrl.length - 1];
  const imagePath = `/images/${filename}`;

  const response = await fetch(url);

  // @ts-ignore
  const buffer = await response.buffer();
  await fs.writeFile(`./public${imagePath}`, buffer);

  return imagePath;
};
