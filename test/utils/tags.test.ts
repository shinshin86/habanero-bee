import { getTagList } from '@/utils/tags';

describe('getTagList', (): void => {
  test('Should return list of tags, if have tags.', (): void => {
    const tags = 'AAA,BBB, CCC ';
    const tagList: Array<string> = getTagList(tags);
    expect(tagList.length).toBe(3);
    expect(tagList[0]).toBe('AAA');
    expect(tagList[1]).toBe('BBB');
    expect(tagList[2]).toBe('CCC');
  });

  test("Should return list of empty, if haven't tags.", (): void => {
    const tags = '';
    const tagList: Array<string> = getTagList(tags);
    expect(tagList.length).toBe(0);
  });
});
