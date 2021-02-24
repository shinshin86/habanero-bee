const fetch = require('node-fetch');
const generateFavicons = require('simple-favicon-generator');

(async () => {
  const { SHEET_URL } = process.env;
  if (!SHEET_URL) {
    console.log('SHEET_URL is required.');
    console.log('Generate favicon: ERROR');
    return;
  }

  if (process.argv.length !== 3) {
    console.log('USAGE: node scripts/gen-favicon.js <target image>');
    console.log('Generate favicon: ERROR');
    return;
  }

  const response = await fetch(SHEET_URL).then((r) => r.json());
  const { title: siteName } = response.meta;

  const targetImg = process.argv[2];
  const outputDir = './public';

  try {
    await generateFavicons(targetImg, siteName, outputDir);

    console.log('Generate favicon: SUCCESS');
  } catch (err) {
    console.error(err);
    console.error('Generate favicon: ERROR');
  }
})();
