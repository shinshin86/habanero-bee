import Layout from '@/components/Layout';
import Analytics from '@/components/Analytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTopButton from '@/components/PageTopButton';
import AvatarImage from '@/components/AvatarImage';
import { isValidData } from '@/utils/validate';
import { General, Meta } from '@/utils/sheet-data';
import { GetStaticProps } from 'next';
import ExternalLinks from '@/components/ExternalLinks';
import { getDownloadedImagePath } from '@/utils/image';
import { getTagList } from '@/utils/tags';
import { getSlugText } from '@/utils/slug';

export const config = {
  amp: true,
};

const IndexPage: React.FC<{
  general: General;
  meta: Meta;
  tags: Array<string>;
}> = ({ general, meta, tags }): JSX.Element => {
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
    copyrightText,
    copyrightLink,
  } = general;

  const { googleAnalyticsTrackingId, googleSiteVerificationCode, noindex } =
    meta;

  const avatarImage = downloadedImagePath || logoImage;

  return (
    <Layout
      backgroundColorCode={backgroundColor}
      pageTopButtonColorCode={pageTopButtonColor}
    >
      <Header
        siteUrl={`${meta.siteUrl}/tags`}
        title={`Tags | ${meta.title}`}
        description={`Tags | ${meta.title}`}
        ogpImage={meta.ogpImage}
        avatarImage={avatarImage}
        googleSiteVerificationCode={googleSiteVerificationCode}
        noindex={noindex}
      />
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
            <p>Tags</p>
          </header>
          {tags.length ? (
            <ul className="tag-link-list-container">
              {tags.map((tag, index) => (
                <li key={index} className="tag-list">
                  <a
                    href={`/tags/${getSlugText(tag)}`}
                    className="external-link-button"
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>This site has not been tagged with any posts.</p>
          )}
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

  const tags: Array<string> = [];

  for (const c of content) {
    if (!c.tags) continue;

    for (const tag of getTagList(c.tags)) {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    }
  }

  return {
    props: {
      general,
      meta,
      tags,
    },
  };
};

export default IndexPage;
