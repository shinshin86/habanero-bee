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

    expect(() => isValidData(general, meta, contentList)).toThrow(
      'BUILD ERROR: title and description is required(general sheet)'
    );
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

    expect(() => isValidData(general, meta, contentList)).toThrow(
      'BUILD ERROR: siteUrl and title and description and ogpImage is required(meta sheet)'
    );
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

    expect(() => isValidData(general, meta, contentList)).toThrow(
      'BUILD ERROR: title and text and slug is required(content sheet)'
    );
  });

  test('Should return false, If data is invalid. (Case of content slug is duplicated)', (): void => {
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
        slug: 'test1',
      },
    ];

    expect(() => isValidData(general, meta, contentList)).toThrow(
      'BUILD ERROR: slug is duplicated'
    );
  });

  test('Should return false, If data is invalid. (Case of content slug include slash)', (): void => {
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
        slug: 'te/st2',
      },
    ];

    expect(() => isValidData(general, meta, contentList)).toThrow(
      "BUILD ERROR: Can't use /(slash) in slug(content sheet)"
    );
  });

  test('Should return true, If all data is valid. (Include tags)', (): void => {
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
        tags: 'test, post',
      },
      {
        title: 'test2',
        text: 'test2',
        slug: 'test2',
        tags: 'test, post',
      },
    ];

    expect(isValidData(general, meta, contentList)).toBeTruthy();
  });

  test('Should return false, If data is invalid. (Case of content tags include slash)', (): void => {
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
        tags: 'test, post',
      },
      {
        title: 'test2',
        text: 'test2',
        slug: 'test2',
        tags: 'test, po/st',
      },
    ];

    expect(() => isValidData(general, meta, contentList)).toThrow(
      "BUILD ERROR: Can't use /(slash) in tags(content sheet)"
    );
  });
});
