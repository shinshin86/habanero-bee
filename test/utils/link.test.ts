import { Links, getLinks, chackHasOtherLinks } from '@/utils/link';
import { General } from '@/utils/sheet-data';

describe('getLinks', (): void => {
  test('Should store and return a value in the link object.', (): void => {
    const general: General = {
      title: 'test',
      description: 'test',
      websiteLink: 'websiteLinkUrl',
      twitterLink: 'twitterLinkUrl',
      instagramLink: 'instagramLinkUrl',
      facebookLink: 'facebookLinkUrl',
      githubLink: 'githubLinkUrl',
      tumblrLink: 'tumblrLinkUrl',
      patreonLink: 'patreonLinkUrl',
      quoraLink: 'quoraLinkUrl',
    };

    const links: Links = getLinks(general);
    expect(Object.keys(links).length).toBe(8);
    expect(links.website).toBe(general.websiteLink);
    expect(links.twitter).toBe(general.twitterLink);
    expect(links.instagram).toBe(general.instagramLink);
    expect(links.facebook).toBe(general.facebookLink);
    expect(links.github).toBe(general.githubLink);
    expect(links.tumblr).toBe(general.tumblrLink);
    expect(links.patreon).toBe(general.patreonLink);
    expect(links.quora).toBe(general.quoraLink);
  });

  test("Should return an empty object, if haven't links", (): void => {
    const general: General = {
      title: 'test',
      description: 'test',
    };

    const links: Links = getLinks(general);
    expect(Object.keys(links).length).toBe(0);
  });
});

describe('chackHasOtherLinks', (): void => {
  test('Should return a true, if have a links.', (): void => {
    const links: Links = { website: 'websiteLinkUrl' };
    expect(chackHasOtherLinks(links)).toBeTruthy();
  });

  test("Should return a false, if haven't a links.", (): void => {
    const links: Links = {};
    expect(chackHasOtherLinks(links)).toBeFalsy();
  });
});
