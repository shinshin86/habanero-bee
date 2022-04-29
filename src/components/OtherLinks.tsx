/* eslint-disable @typescript-eslint/no-explicit-any */
const OtherLinks: React.FC<{ links: any }> = ({ links }): JSX.Element => (
  <ul className="external-link-container">
    {Object.keys(links).map((key, index) => {
      return (
        links[key] && (
          <li key={index} className="external-link">
            <a
              href={links[key]}
              className="external-link-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {key}
            </a>
          </li>
        )
      );
    })}
  </ul>
);

export default OtherLinks;
