const fs = require('fs').promises;
const generateSitemap = require('very-simple-sitemap-generator').default;
const fetch = require('node-fetch');

const getTagList = (tags) => {
  if (!tags) return [];

  return tags.replace(/\s+/g, '').split(',');
};

const getSlugText = (slug) => slug.toLowerCase();

(async () => {
  const { SHEET_URL } = process.env;
  if (!SHEET_URL) {
    console.log('SHEET_URL is required.');
    console.log('Generate sitemap: ERROR');
    return;
  }

  const response = await fetch(SHEET_URL).then((r) => r.json());
  const { siteUrl } = response.meta;

  const urlList = response.content.map((c) => `${siteUrl}/${c.slug}`);

  const tagList = [];
  for (const c of response.content) {
    const tList = getTagList(c.tags);
    if (!tList.length) {
      continue;
    }

    tagList.push(...tList);
  }

  const uniqueTagList = tagList.filter(
    (tag, index, self) => self.indexOf(tag) === index
  );
  const uniqueTagUrlList = uniqueTagList.map(
    (t) => `${siteUrl}/tags/${getSlugText(t)}`
  );

  const tags = urlList.concat(uniqueTagUrlList);
  tags.push(siteUrl);
  tags.push(`${siteUrl}/tags`);

  const sitemap = generateSitemap(tags);
  await fs.writeFile('public/sitemap.xml', sitemap);

  console.log('Generate sitemap: SUCCESS');
})();
