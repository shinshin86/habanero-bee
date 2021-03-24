import Head from 'next/head';
import GoogleSiteVerification from '@/components/GoogleSiteVerification';
import { Meta } from '@/utils/sheet-data';

const Header: React.FC<Meta> = ({
  siteUrl,
  title,
  keywords,
  ogpImage,
  avatarImage,
  description,
  googleSiteVerificationCode,
  noindex,
}): JSX.Element => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="canonical" href={siteUrl} />
    {noindex && <meta name="robots" content="noindex" />}
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    {/* primary meta tags */}
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="format-detection" content="telephone=no" />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta name="description" content={description} />
    {/* facebook */}
    <meta property="og:site_name" content={title} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:image" content={ogpImage} />
    {/* twitteri */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={siteUrl} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogpImage} />

    <link rel="preload" as="image" href={avatarImage} />
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300"
    />
    <script
      async
      custom-element="amp-position-observer"
      src="https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"
    ></script>
    <script
      async
      custom-element="amp-animation"
      src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"
    ></script>
    {googleSiteVerificationCode && (
      <GoogleSiteVerification code={googleSiteVerificationCode} />
    )}
  </Head>
);

export default Header;
