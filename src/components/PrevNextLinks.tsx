const PrevNextLinks: React.FC<{ prevPageUrl: string; nextPageUrl: string }> = ({
  prevPageUrl,
  nextPageUrl,
}): JSX.Element => (
  <div className="prev-next-links">
    {prevPageUrl ? (
      <a href={prevPageUrl} className="external-link-button">{`<`}</a>
    ) : (
      <span className="disable-external-link-button">{`<`}</span>
    )}
    {nextPageUrl ? (
      <a href={nextPageUrl} className="external-link-button">{`>`}</a>
    ) : (
      <span className="disable-external-link-button">{`>`}</span>
    )}
  </div>
);

export default PrevNextLinks;
