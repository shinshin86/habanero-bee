export interface ExternalLink {
  url: string;
  text: string;
}

export const getExternalLinks = (
  url: string,
  text: string
): Array<ExternalLink> => {
  if (!url || !text) {
    throw new Error('An empty URL or text is entered.');
  }

  const urlList = url.split(',');
  const textList = text.split(',');
  if (urlList.length !== textList.length) {
    throw new Error('Number of  URL and the texts is different.');
  }

  return urlList.map((url, index) => {
    return { url: url.trim(), text: textList[index].trim() };
  });
};
