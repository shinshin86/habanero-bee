import { getBrandIcon } from '../utils/icon';

/* @ts-ignore  */
/* eslint-disable @typescript-eslint/no-explicit-any */
const OtherLinks: React.FC<{ links: any }> = ({ links }): JSX.Element => (
  <ul className="icons other-links-container">
    {Object.keys(links).map((key, index) => {
      return (
        links[key] && (
          <li key={index}>
            <a
              href={links[key]}
              className={getBrandIcon(key)}
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
