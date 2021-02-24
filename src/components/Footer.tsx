const Footer = (): JSX.Element => (
  <footer id="footer">
    <div>
      <ul className="copyright">
        <li>&copy; Jane Doe</li>
        <li>
          Design:{' '}
          <a
            href="http://html5up.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML5 UP
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul className="copyright">
        <li>
          &copy;{' '}
          <a
            href="https://shinshin86.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yuki Shindo
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
