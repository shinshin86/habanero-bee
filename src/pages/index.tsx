import Layout from '@/components/Layout';
import AmpAutoAds from '@/components/AmpAutoAds';
import Analytics from '@/components/Analytics';
import LinkCard from '@/components/LinkCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTopButton from '@/components/PageTopButton';
import AvatarImage from '@/components/AvatarImage';
import { isValidData } from '@/utils/sheet-data-validate';
import { General, Meta, Content } from '@/interfaces/sheet-data';
import { GetStaticProps } from 'next';
import ExternalLinks from '@/components/ExternalLinks';
import { getDownloadedImagePath } from '@/utils/image';

export const config = {
  amp: true,
};

const IndexPage: React.FC<{
  general: General;
  content: Array<Content>;
  meta: Meta;
}> = ({ general, content, meta }): JSX.Element => {
  const {
    title,
    description,
    logoImage,
    downloadedImagePath,
    logoImageAltText,
    externalLinkUrl,
    externalLinkText,
    externalLinkTitle,
    backgroundColor,
    pageTopButtonColor,
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
        siteUrl={meta.siteUrl}
        title={meta.title}
        description={meta.description}
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
            <AvatarImage
              imageUrl={avatarImage}
              altText={logoImageAltText}
              width="250"
              height="250"
            />
            <h1>{title}</h1>
            <p>{description}</p>
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

export const getStaticProps: GetStaticProps = async () => {
  if (!process.env.SHEET_URL) {
    throw new Error('BUILD ERROR: Setting the SHEET_URL is required.');
  }

  const { SHEET_URL } = process.env;

  const response = await fetch(SHEET_URL).then((r) => r.json());
  const { general, meta, content } = response;

  if (!isValidData(general, meta, content)) {
    throw new Error('BUILD ERROR: Invalid sheet data');
  }

  general.downloadedImagePath =
    general.logoImage && (await getDownloadedImagePath(general.logoImage));

  for (const c of content) {
    c.downloadedImagePath =
      c.imagePath && (await getDownloadedImagePath(c.imagePath));
  }

  return {
    props: {
      general,
      meta,
      content,
    },
  };
};

export default IndexPage;
