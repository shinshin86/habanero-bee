import Layout from '../components/Layout';
import Analytics from '../components/Analytics';
import LinkCard from '../components/LinkCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTopButton from '../components/PageTopButton';
import OtherLinks from '../components/OtherLinks';
import AvatarImage from '../components/AvatarImage';
import { isValidData } from '../utils/validate';
import { getLinks, checkHasOtherLinks } from '../utils/link';
import { General, Meta, Content } from '../utils/sheet-data';
import { GetStaticProps } from 'next';

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
    logoImageAltText,
    backgroundColor,
  } = general;

  const links = getLinks(general);
  const hasOtherLinks = checkHasOtherLinks(links);

  const { googleAnalyticsTrackingId, googleSiteVerificationCode } = meta;

  return (
    <Layout backgroundColorCode={backgroundColor}>
      <Header
        siteUrl={meta.siteUrl}
        title={meta.title}
        description={meta.description}
        ogpImage={meta.ogpImage}
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
          <header>
            <AvatarImage imageUrl={logoImage} altText={logoImageAltText} />
            <h1>{title}</h1>
            <p>{description}</p>
          </header>
          {content.map((data, index) => (
            <LinkCard {...data} key={index} />
          ))}
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

  return {
    props: {
      general,
      meta,
      content,
    },
  };
};

export default IndexPage;
