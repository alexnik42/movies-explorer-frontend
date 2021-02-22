import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__main">
          <p className="footer__copyright">&copy; 2020</p>
          <nav className="footer__navbar">
            <ul className="footer__links">
              <li className="footer_link-section">
                <a
                  className="footer__link"
                  href="https://praktikum.yandex.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer_link-section">
                <a
                  className="footer__link"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="footer_link-section">
                <a
                  className="footer__link"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
