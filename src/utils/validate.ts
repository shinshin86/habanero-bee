import { General, Meta, Content } from '@/utils/sheet-data';

const isValidGeneralData = (obj: General): boolean => {
  const { title, description } = obj;

  if (!title || !description) {
    throw new Error(
      'BUILD ERROR: title and description is required(general sheet)'
    );
  }
  return true;
};

const isValidMetaData = (obj: Meta): boolean => {
  const { siteUrl, title, description, ogpImage } = obj;

  if (!siteUrl || !title || !description || !ogpImage) {
    throw new Error(
      'BUILD ERROR: siteUrl and title and description and ogpImage is required(meta sheet)'
    );
  }

  return true;
};

const isValidContentData = (contentList: Array<Content>): boolean => {
  const slugList: Array<string> = [];
  for (const content of contentList) {
    const { title, text, slug, tags } = content;
    if (!title || !text || !slug) {
      throw new Error(
        'BUILD ERROR: title and text and slug is required(content sheet)'
      );
    }

    if (hasIncludeSlash(slug)) {
      throw new Error("BUILD ERROR: Can't use /(slash) in slug(content sheet)");
    }

    if (tags && hasIncludeSlash(tags)) {
      throw new Error("BUILD ERROR: Can't use /(slash) in tags(content sheet)");
    }

    slugList.push(slug);
  }

  if (hasDuplicateSlug(slugList)) {
    throw new Error('BUILD ERROR: slug is duplicated');
  }

  return true;
};

const hasDuplicateSlug = (slugList: Array<string>): boolean => {
  const slugSet = new Set(slugList);
  return slugSet.size !== slugList.length;
};

const hasIncludeSlash = (tags: string): boolean => tags.indexOf('/') !== -1;

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
