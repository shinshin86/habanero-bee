export interface General {
  title: string;
  description: string;
  logoImage?: string;
  logoImageAltText?: string;
  websiteLink?: string;
  twitterLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  githubLink?: string;
  tumblrLink?: string;
  patreonLink?: string;
  quoraLink?: string;
  backgroundColor?: string;
}

export interface Meta {
  siteUrl: string;
  title: string;
  description: string;
  ogpImage: string;
  keywords?: string;
  googleAnalyticsTrackingId?: string;
  googleSiteVerificationCode?: string;
}

export interface Content {
  title: string;
  text: string;
  slug: string;
  description?: string;
  imagePath?: string;
  imageAltText?: string;
  externalLinkUrl?: string;
  externalLinkText?: string;
  tags?: string;
  renderedHTML?: string;
}
