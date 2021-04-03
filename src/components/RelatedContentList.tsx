import { Content } from '@/utils/sheet-data';

const RelatedContentList: React.FC<{
  relatedContentList: Array<Content>;
  relatedContentTitle: string;
}> = ({ relatedContentList, relatedContentTitle }): JSX.Element => (
  <div>
    <h2>{relatedContentTitle}</h2>
    {relatedContentList.map((content) => (
      <p key={content.slug}>
        <a href={`/${content.slug}`}>{content.title}</a>
      </p>
    ))}
  </div>
);

export default RelatedContentList;
