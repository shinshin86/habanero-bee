export interface ExternalLink {
  url: string;
  text: string;
}

const ExternalLinks: React.FC<{ externalLinks: Array<ExternalLink> }> = ({
  externalLinks,
}): JSX.Element => (
  <div>
    <h3>External link</h3>
    <ul className="external-link-container">
      {externalLinks.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="webapp-button"
          >
            {link.text || 'Read'}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ExternalLinks;
