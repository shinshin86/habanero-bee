export const getTagList = (tags: string): Array<string> => {
  if (!tags) return [];

  return tags.replace(/\s+/g, '').split(',');
};
