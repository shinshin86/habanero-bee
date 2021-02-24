import { General } from './sheet-data';

export interface Links {
  website?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  github?: string;
  tumblr?: string;
  patreon?: string;
  quora?: string;
}

export const getLinks = (generalData: General): Links => {
  const {
    websiteLink,
    twitterLink,
    instagramLink,
    facebookLink,
    githubLink,
    tumblrLink,
    patreonLink,
    quoraLink,
  } = generalData;

  const links: Links = {};
  if (websiteLink) {
    links.website = websiteLink;
  }
  if (instagramLink) {
    links.instagram = instagramLink;
  }
  if (facebookLink) {
    links.facebook = facebookLink;
  }
  if (twitterLink) {
    links.twitter = twitterLink;
  }
  if (githubLink) {
    links.github = githubLink;
  }
  if (tumblrLink) {
    links.tumblr = tumblrLink;
  }
  if (patreonLink) {
    links.patreon = patreonLink;
  }
  if (quoraLink) {
    links.quora = quoraLink;
  }

  return links;
};

export const chackHasOtherLinks = (links: Links): boolean => {
  return !!Object.keys(links).length;
};
