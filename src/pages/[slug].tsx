import Layout from '../components/Layout';
import Analytics from '../components/Analytics';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTopButton from '../components/PageTopButton';
import OtherLinks from '../components/OtherLinks';
import TagLinks from '../components/TagLinks';
import { isValidData } from '../utils/validate';
import { getTagList } from '../utils/tags';
import { getLinks, chackHasOtherLinks } from '../utils/link';
import { renderHTML, getMetaDescriptionText } from '../utils/content';
import { General, Meta, Content } from '../utils/sheet-data';
import { GetStaticPaths, GetStaticProps } from 'next';

export const config = {
  amp: true,
};

const DetailPage: React.FC<{
  general: General;
  contentData: Content;
  meta: Meta;
}> = ({ general, contentData, meta }): JSX.Element => {
  const { title: pageTitle } = general;

  const links = getLinks(general);
  const hasOtherLinks = chackHasOtherLinks(links);

  const { googleAnalyticsTrackingId, googleSiteVerificationCode } = meta;

  const {
    title,
    description,
    text,
    imagePath,
    imageAltText,
    tags,
    renderedHTML,
  } = contentData;
  const tagList = getTagList(tags);

  return (
    <Layout>
      <Header
        siteUrl={`${meta.siteUrl}/${contentData.slug}`}
        title={`${title} | ${meta.title}`}
        description={description || getMetaDescriptionText(text)}
        ogpImage={imagePath || meta.ogpImage}
        googleSiteVerificationCode={googleSiteVerificationCode}
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
          <div>
            <a href="/">
              <h1>{pageTitle}</h1>
            </a>
          </div>
          <hr />

          <header>
            {!!tagList.length && <TagLinks tags={tagList} />}
            <span className="avatar">
              <amp-img
                src={imagePath || '/images/no-image.png'}
                alt={imageAltText || 'No Image'}
                width="250"
                height="250"
              />
            </span>
            <h2>{title}</h2>
            {renderedHTML ? (
              <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />
            ) : (
              `<div>${text}</div>`
            )}
          </header>

          <hr />
          {hasOtherLinks && (
            <div>
              <h3>LINKS</h3>
              <OtherLinks links={links} />
            </div>
          )}
        </section>
        <Footer />
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
  const paths = response.content.map((c: Content) => `/${c.slug}`);

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
  const contentData = content.find((c: Content) => c.slug === params.slug);
  contentData.renderedHTML = renderHTML(contentData.text);

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
