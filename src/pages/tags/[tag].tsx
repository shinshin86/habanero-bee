import Layout from '@/components/Layout';
import AmpAutoAds from '@/components/AmpAutoAds';
import Analytics from '@/components/Analytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LinkCard from '@/components/LinkCard';
import PageTopButton from '@/components/PageTopButton';
import AvatarImage from '@/components/AvatarImage';
import { getTagList } from '@/utils/tags';
import { isValidData } from '@/utils/validate';
import { General, Meta, Content } from '@/utils/sheet-data';
import { GetStaticPaths, GetStaticProps } from 'next';
import ExternalLinks from '@/components/ExternalLinks';
import { getSlugText } from '@/utils/slug';
import { getDownloadedImagePath } from '@/utils/image';

export const config = {
  amp: true,
};

const TagPage: React.FC<{
  general: General;
  content: Array<Content>;
  meta: Meta;
  tag: string;
}> = ({ general, content, meta, tag }): JSX.Element => {
  const {
    title,
    logoImage,
    downloadedImagePath,
    logoImageAltText,
    externalLinkUrl,
    externalLinkText,
    externalLinkTitle,
    backgroundColor,
    pageTopButtonColor,
    tagLinkTitle,
    copyrightText,
    copyrightLink,
  } = general;

  const {
    googleAnalyticsTrackingId,
    googleSiteVerificationCode,
    googleAdsenseCode,
    noindex,
  } = meta;

  const avatarImage = downloadedImagePath || logoImage;

  return (
    <Layout
      backgroundColorCode={backgroundColor}
      pageTopButtonColorCode={pageTopButtonColor}
    >
      <Header
        siteUrl={`${meta.siteUrl}/tags/${tag}`}
        title={`${tagLinkTitle || 'Tag'} - ${tag} | ${meta.title}`}
        description={`${tagLinkTitle || 'Tag'} - ${tag} | ${meta.description}`}
        ogpImage={meta.ogpImage}
        avatarImage={avatarImage}
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
          <header>
            <a href="/">
              <AvatarImage
                imageUrl={avatarImage}
                altText={logoImageAltText}
                width="250"
                height="250"
              />
            </a>
            <a href="/">
              <h1>{title}</h1>
            </a>
            <p>
              {tagLinkTitle || 'Tag'} - {tag}
            </p>
          </header>
          <ul>
            {content.map((data, index) => {
              data.externalLinkTitle = externalLinkTitle;
              return <LinkCard {...data} key={index} />;
            })}
          </ul>
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

  const tagList = [];
  for (const c of response.content) {
    const tList = getTagList(c.tags);
    if (!tList.length) {
      continue;
    }

    tagList.push(...tList);
  }

  const uniqueTagList = tagList.filter(
    (tag, index, self) => self.indexOf(tag) === index
  );
  const paths = uniqueTagList.map((t) => `/tags/${getSlugText(t)}`);

  return { paths, fallback: false };
};

type Params = {
  params: {
    tag: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  if (!process.env.SHEET_URL) {
    throw new Error('BUILD ERROR: Setting the SHEET_URL is required.');
  }

  const { SHEET_URL } = process.env;

  const response = await fetch(SHEET_URL).then((r) => r.json());
  const { general, meta, content } = response;

  const contentList = content.filter((c: Content) => {
    return getTagList(getSlugText(c.tags)).includes(params.tag);
  });

  if (!isValidData(general, meta, contentList)) {
    throw new Error('BUILD ERROR: Invalid sheet data');
  }

  general.downloadedImagePath =
    general.logoImage && (await getDownloadedImagePath(general.logoImage));

  for (const c of contentList) {
    c.downloadedImagePath =
      c.imagePath && (await getDownloadedImagePath(c.imagePath));
  }

  return {
    props: {
      general,
      meta,
      content: contentList,
      tag: params.tag,
    },
  };
};

export default TagPage;
