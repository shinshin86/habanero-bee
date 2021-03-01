import { General, Meta, Content } from './sheet-data';

const isValidGeneralData = (obj: General): boolean => {
  const { title, description } = obj;
  return !!(title && description);
};

const isValidMetaData = (obj: Meta): boolean => {
  const { siteUrl, title, description, ogpImage } = obj;
  return !!(siteUrl && title && description && ogpImage);
};

const isValidContentData = (contentList: Array<Content>): boolean => {
  const slugList: Array<string> = [];
  for (const content of contentList) {
    const { title, text, slug } = content;
    if (!title || !text || !slug) return false;

    slugList.push(slug);
  }

  if (hasDuplicateSlug(slugList)) {
    console.log('ERROR: slug is duplicated');
    return false;
  }

  return true;
};

const hasDuplicateSlug = (slugList: Array<string>): boolean => {
  const slugSet = new Set(slugList);
  return slugSet.size !== slugList.length;
};

export const isValidData = (
  general: General,
  meta: Meta,
  contentList: Array<Content>
): boolean => {
  return (
    isValidGeneralData(general) &&
    isValidMetaData(meta) &&
    isValidContentData(contentList)
  );
};
