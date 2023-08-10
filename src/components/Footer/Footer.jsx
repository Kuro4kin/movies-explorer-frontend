import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__year">&copy; {new Date().getFullYear()}</p>
        <nav className="footer__links-container">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/Kuro4kin" target="_blank" rel="noreferrer">
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
