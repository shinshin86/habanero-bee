const Footer: React.FC<{ link: string; text: string }> = ({
  link,
  text,
}): JSX.Element => (
  <footer id="footer">
    <div>
      <ul className="copyright">
        <li>
          &copy;{' '}
          <a
            href={link || 'https://github.com/shinshin86/habanero-bee'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text || 'Habanero Bee'}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
