import { isValidData } from '@/utils/validate';
import { General, Meta, Content } from '@/utils/sheet-data';

describe('isValidData', (): void => {
  test('Should return true, If all data is valid.', (): void => {
    const general: General = { title: 'test', description: 'test' };
    const meta: Meta = {
      siteUrl: 'test',
      title: 'test',
      description: 'test',
      ogpImage: 'test',
    };
    const contentList: Array<Content> = [
      {
        title: 'test1',
        text: 'test1',
        slug: 'test1',
      },
      {
        title: 'test2',
        text: 'test2',
        slug: 'test2',
      },
    ];

    expect(isValidData(general, meta, contentList)).toBeTruthy();
  });

  test('Should return false, If data is invalid. (Case of general data is invalid)', (): void => {
    const general: General = { title: 'test', description: '' };
    const meta: Meta = {
      siteUrl: 'test',
      title: 'test',
      description: 'test',
      ogpImage: 'test',
    };
    const contentList: Array<Content> = [
      {
        title: 'test1',
        text: 'test1',
        slug: 'test1',
      },
      {
        title: 'test2',
        text: 'test2',
        slug: 'test2',
      },
    ];

    expect(isValidData(general, meta, contentList)).toBeFalsy();
  });

  test('Should return false, If data is invalid. (Case of meta data is invalid)', (): void => {
    const general: General = { title: 'test', description: 'test' };
    const meta: Meta = {
      siteUrl: 'test',
      title: 'test',
      description: 'test',
      ogpImage: '',
    };
    const contentList: Array<Content> = [
      {
        title: 'test1',
        text: 'test1',
        slug: 'test1',
      },
      {
        title: 'test2',
        text: 'test2',
        slug: 'test2',
      },
    ];

    expect(isValidData(general, meta, contentList)).toBeFalsy();
  });

  test('Should return false, If data is invalid. (Case of content data is invalid)', (): void => {
    const general: General = { title: 'test', description: 'test' };
    const meta: Meta = {
      siteUrl: 'test',
      title: 'test',
      description: 'test',
      ogpImage: 'test',
    };
    const contentList: Array<Content> = [
      {
        title: 'test1',
        text: 'test1',
        slug: 'test1',
      },
      {
        title: 'test2',
        text: 'test2',
        slug: '',
      },
    ];

    expect(isValidData(general, meta, contentList)).toBeFalsy();
  });
});
