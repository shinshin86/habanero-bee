import TagLinks from './TagLinks';
import { getTagList } from '../utils/tags';
import { getDescriptionText, getTextContent } from '../utils/content';
import { Content } from '../utils/sheet-data';
import ExternalLinks from '@/components/ExternalLinks';

const LinkCard: React.FC<Content> = ({
  title,
  tags,
  description,
  text,
  imagePath,
  imageAltText,
  slug,
  externalLinkUrl,
  externalLinkText,
}): JSX.Element => {
  const linkUrl = `/${slug}`;
  const tagList = getTagList(tags);
  const descriptionText =
    getDescriptionText(description) || getDescriptionText(getTextContent(text));

  return (
    <li className="link-card-list" key={title}>
      <a href={linkUrl}>
        <h2>{title}</h2>
      </a>
      {!!tagList.length && <TagLinks tags={tagList} />}
      <a href={linkUrl}>
        <span>
          <amp-img
            style={{ borderRadius: '100%' }}
            src={imagePath || '/images/no-image.png'}
            alt={imageAltText || 'No Image'}
            width="200"
            height="200"
          />
        </span>
        <p className="description-text">{descriptionText}</p>
      </a>
      {externalLinkUrl && (
        <ExternalLinks url={externalLinkUrl} text={externalLinkText} />
      )}
    </li>
  );
};

export default LinkCard;
