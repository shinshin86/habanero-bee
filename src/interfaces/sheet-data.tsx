export interface General {
  title: string;
  description: string;
  logoImage?: string;
  downloadedImagePath?: string;
  logoImageAltText?: string;
  externalLinkUrl?: string;
  externalLinkText?: string;
  externalLinkTitle?: string;
  backgroundColor?: string;
  pageTopButtonColor?: string;
  enableRelatedContentLink?: boolean;
  relatedContentTitle?: string;
  tagLinkTitle?: string;
  copyrightText?: string;
  copyrightLink?: string;
}

export interface Meta {
  siteUrl: string;
  title: string;
  description: string;
  ogpImage: string;
  avatarImage?: string;
  keywords?: string;
  googleAnalyticsTrackingId?: string;
  googleSiteVerificationCode?: string;
  googleAdsenseCode?: string;
  noindex?: boolean;
}

export interface Content {
  title: string;
  text: string;
  slug: string;
  description?: string;
  imagePath?: string;
  downloadedImagePath?: string;
  imageAltText?: string;
  externalLinkUrl?: string;
  externalLinkText?: string;
  externalLinkTitle?: string;
  tags?: string;
  renderedHTML?: string;
  publishedDate?: Date;
  dateFormat?: string;
  prevPageUrl?: string;
  nextPageUrl?: string;
  relatedContentList?: Array<Content>;
}
