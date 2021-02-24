const GoogleSiteVerification: React.FC<{ code: string }> = ({
  code,
}): JSX.Element => <meta name="google-site-verification" content={code} />;

export default GoogleSiteVerification;
