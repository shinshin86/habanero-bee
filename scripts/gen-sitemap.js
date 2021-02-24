const fs = require('fs').promises;
const generateSitemap = require('very-simple-sitemap-generator').default;
const fetch = require('node-fetch');

(async () => {
  const { SHEET_URL } = process.env;
  if (!SHEET_URL) {
    console.log('SHEET_URL and SITE_TOP_URL is required.');
    console.log('Generate sitemap: ERROR');
    return;
  }

  const response = await fetch(SHEET_URL).then((r) => r.json());
  const { siteUrl } = response.meta;
  const urlList = response.content.map((c) => `${siteUrl}/${c.slug}`);

  const sitemap = generateSitemap(urlList);
  await fs.writeFile('public/sitemap.xml', sitemap);

  console.log('Generate sitemap: SUCCESS');
})();
