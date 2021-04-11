const Footer: React.FC<{ link: string; text: string }> = ({
  link,
  text,
}): JSX.Element => {
  if (!text && !!link) {
    throw new Error(
      'BUILD ERROR: If you specify a link for copyright, please specify the text as well.'
    );
  }

  /**
   * Copyright link or text
   * link: If both text and link are specified
   * link: If both text and link are not specified
   * text: If text only are specified
   */
  const isCopyrightLink = (!text && !link) || (!!text && !!link);

  return (
    <footer id="footer">
      <div>
        <ul className="copyright">
          <li>
            &copy;{' '}
            {isCopyrightLink ? (
              <a
                href={link || 'https://github.com/shinshin86/habanero-bee'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text || 'Habanero Bee'}
              </a>
            ) : (
              <>{text}</>
            )}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
