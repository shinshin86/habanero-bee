import { Content } from '@/utils/sheet-data';

const RelatedContentList: React.FC<{
  relatedContentList: Array<Content>;
  relatedContentTitle: string;
}> = ({ relatedContentList, relatedContentTitle }): JSX.Element => (
  <div>
    <amp-accordion disable-session-states="" animate="">
      {/* @ts-ignore */}
      <section expanded="">
        {/* It didn't reflect, so I wrote it directly style. */}
        <h2
          style={{
            borderRadius: 24,
            margin: 16,
            padding: '0 8px',
            fontSize: '1.5em',
          }}
        >
          {relatedContentTitle}
        </h2>
        <div>
          {relatedContentList.map((content) => (
            <p key={content.slug}>
              <a href={`/${content.slug}`}>{content.title}</a>
            </p>
          ))}
        </div>
      </section>
    </amp-accordion>
  </div>
);

export default RelatedContentList;
