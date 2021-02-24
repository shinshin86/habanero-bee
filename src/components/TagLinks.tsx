const TagLinks: React.FC<{ tags: Array<string> }> = ({ tags }): JSX.Element => (
  <ul className="tag-link-list-container">
    {tags.map((tag, index) => (
      <li key={index} className="tag-list">
        <a href={`/tags/${tag}`} className="webapp-button">
          {tag}
        </a>
      </li>
    ))}
  </ul>
);

export default TagLinks;
