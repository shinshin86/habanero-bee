interface AmpAutoAds {
  type?: string;
  code: string;
}

const AmpAutoAds: React.FC<AmpAutoAds> = ({
  type = 'adsense',
  code,
}): JSX.Element => {
  return <amp-auto-ads type={type} data-ad-client={code}></amp-auto-ads>;
};

export default AmpAutoAds;
