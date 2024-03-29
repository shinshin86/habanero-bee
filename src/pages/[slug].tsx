import dayjs from 'dayjs';
import Layout from '@/components/Layout';
import AmpAutoAds from '@/components/AmpAutoAds';
import Analytics from '@/components/Analytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTopButton from '@/components/PageTopButton';
import TagLinks from '@/components/TagLinks';
import AvatarImage from '@/components/AvatarImage';
import { isValidData } from '@/utils/sheet-data-validate';
import { getTagList } from '@/utils/tags';
import { renderAmpHTML, getMetaDescriptionText } from '@/utils/content';
import { General, Meta, Content } from '@/interfaces/sheet-data';
import { GetStaticPaths, GetStaticProps } from 'next';
import ExternalLinks from '@/components/ExternalLinks';
import PrevNextLinks from '@/components/PrevNextLinks';
import RelatedContentList from '@/components/RelatedContentList';
import { getSlugText, getUrlText } from '@/utils/slug';
import { getDownloadedImagePath } from '@/utils/image';

export const config = {
  amp: true,
};

const DetailPage: React.FC<{
  general: General;
  contentData: Content;
  meta: Meta;
}> = ({ general, contentData, meta }): JSX.Element => {
  const {
    title: pageTitle,
    backgroundColor,
    pageTopButtonColor,
    enableRelatedContentLink,
    relatedContentTitle,
    externalLinkTitle,
    copyrightText,
    copyrightLink,
  } = general;

  const {
    googleAnalyticsTrackingId,
    googleSiteVerificationCode,
    googleAdsenseCode,
    noindex,
  } = meta;

  const {
    title,
    description,
    text,
    downloadedImagePath,
    imageAltText,
    tags,
    renderedHTML,
    externalLinkUrl,
    externalLinkText,
    publishedDate,
    dateFormat,
    prevPageUrl,
    nextPageUrl,
    relatedContentList,
  } = contentData;

  const tagList = getTagList(tags);

  return (
    <Layout
      backgroundColorCode={backgroundColor}
      pageTopButtonColorCode={pageTopButtonColor}
    >
      <Header
        siteUrl={`${meta.siteUrl}/${contentData.slug}`}
        title={`${title} | ${meta.title}`}
        description={description || getMetaDescriptionText(text)}
        ogpImage={`${meta.siteUrl}${downloadedImagePath}` || meta.ogpImage}
        avatarImage={downloadedImagePath || '/images/no-image.png'}
        googleSiteVerificationCode={googleSiteVerificationCode}
        googleAdsenseCode={googleAdsenseCode}
        noindex={noindex}
      />
      {googleAdsenseCode && <AmpAutoAds code={googleAdsenseCode} />}
      {googleAnalyticsTrackingId && (
        <Analytics trackingId={googleAnalyticsTrackingId} />
      )}
      {/* Wrapper */}
      <div id="wrapper">
        <div className="target">
          <a className="target-anchor" id="top"></a>
          <amp-position-observer
            on="enter:hideAnim.start; exit:showAnim.start"
            layout="nodisplay"
          ></amp-position-observer>
        </div>
        {/* Main */}
        <section id="main">
          <div>
            <a href="/">
              <h1>{pageTitle}</h1>
            </a>
          </div>
          <hr />

          <header>
            {!!tagList.length && <TagLinks tags={tagList} />}
            <AvatarImage
              imageUrl={downloadedImagePath || '/images/no-image.png'}
              altText={imageAltText}
              width="250"
              height="250"
            />
            <h2>{title}</h2>
            {publishedDate && (
              <p>{dayjs(publishedDate).format(dateFormat || 'YYYY/MM/DD')}</p>
            )}
            {renderedHTML ? (
              <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />
            ) : (
              `<div>${text}</div>`
            )}
          </header>
          {!!enableRelatedContentLink && !!relatedContentList.length && (
            <RelatedContentList
              relatedContentList={relatedContentList}
              relatedContentTitle={relatedContentTitle || 'Related Content'}
            />
          )}
          <PrevNextLinks prevPageUrl={prevPageUrl} nextPageUrl={nextPageUrl} />
          <hr />
          {externalLinkUrl && (
            <ExternalLinks
              url={externalLinkUrl}
              text={externalLinkText}
              title={externalLinkTitle || 'External link'}
            />
          )}
        </section>
        <Footer link={copyrightLink} text={copyrightText} />
      </div>
      <PageTopButton />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (!process.env.SHEET_URL) {
    throw new Error('BUILD ERROR: Setting the SHEET_URL is required.');
  }

  const { SHEET_URL } = process.env;

  const response = await fetch(SHEET_URL).then((r) => r.json());
  const paths = response.content.map((c: Content) =>
    getUrlText(getSlugText(c.slug))
  );

  return { paths, fallback: false };
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  if (!process.env.SHEET_URL) {
    throw new Error('BUILD ERROR: Setting the SHEET_URL is required.');
  }

  const { SHEET_URL } = process.env;

  const response = await fetch(SHEET_URL).then((r) => r.json());
  const { general, meta, content } = response;
  const contentData = content.find(
    (c: Content) => getSlugText(c.slug) === params.slug
  );

  contentData.renderedHTML = await renderAmpHTML(contentData.text);

  contentData.downloadedImagePath =
    contentData.imagePath &&
    (await getDownloadedImagePath(contentData.imagePath));

  // related pages
  contentData.relatedContentList = getTagList(contentData.tags).reduce(
    (prev: Array<Content>, tag: string) => {
      const someTagContents = content.filter(({ slug, tags }: Content) => {
        const relatedPageSlugList = prev.map((p: Content) => p.slug);

        return (
          contentData.slug !== slug &&
          !relatedPageSlugList.includes(slug) &&
          getTagList(tags).includes(tag)
        );
      });

      if (!someTagContents.length) {
        return prev;
      }

      prev.push(...someTagContents);
      return prev;
    },
    []
  );

  const slugList = content.map((c: Content) => getSlugText(c.slug));
  const targetPageIndex = slugList.indexOf(params.slug);
  contentData.prevPageUrl =
    targetPageIndex && getUrlText(slugList[targetPageIndex - 1]);
  contentData.nextPageUrl =
    slugList.length > targetPageIndex + 1 &&
    getUrlText(slugList[targetPageIndex + 1]);

  if (!isValidData(general, meta, new Array(contentData))) {
    throw new Error('BUILD ERROR: Invalid sheet data');
  }

  return {
    props: {
      general,
      meta,
      contentData: contentData,
    },
  };
};

export default DetailPage;
