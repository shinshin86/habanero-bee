const fs = require('fs').promises;
const fetch = require('node-fetch');
const generateFavicons = require('simple-favicon-generator');

(async () => {
  const { SHEET_URL } = process.env;
  if (!SHEET_URL) {
    console.log('SHEET_URL is required.');
    console.log('Generate favicon: ERROR');
    return;
  }

  const targetImagePath = './public/ogp.jpg';
  const outputDir = './public';

  try {
    const sheetData = await fetch(SHEET_URL).then((r) => r.json());
    const { title: siteName, ogpImage } = sheetData.meta;

    const responseImage = await fetch(ogpImage);
    const buffer = await responseImage.buffer();
    await fs.writeFile(targetImagePath, buffer);

    await generateFavicons(targetImagePath, siteName, outputDir);

    console.log('Generate favicon: SUCCESS');
  } catch (err) {
    console.error(err);
    console.error('Generate favicon: ERROR');
  }
})();
