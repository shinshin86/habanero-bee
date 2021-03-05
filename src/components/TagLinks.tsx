const TagLinks: React.FC<{ tags: Array<string> }> = ({ tags }): JSX.Element => {
  const haveMultipleTags = tags.length > 1;

  return (
    <ul
      className={`tag-link-list-container ${
        haveMultipleTags && 'multiple-tags'
      }`}
    >
      {tags.map((tag, index) => (
        <li key={index} className={haveMultipleTags && 'tag-list'}>
          <a href={`/tags/${tag}`} className="webapp-button">
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TagLinks;
