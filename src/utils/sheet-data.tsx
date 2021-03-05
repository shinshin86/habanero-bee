export interface General {
  title: string;
  description: string;
  logoImage?: string;
  logoImageAltText?: string;
  externalLinkUrl?: string;
  externalLinkText?: string;
  backgroundColor?: string;
  pageTopButtonColor?: string;
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
  publishedDate?: Date;
  dateFormat?: string;
  prevPageUrl?: string;
  nextPageUrl?: string;
}
