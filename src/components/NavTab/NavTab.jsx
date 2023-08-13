import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__container">
        <li>
          <a className="navtab__link" href="#project">
            О проекте
          </a>
        </li>
        <li>
          <a className="navtab__link" href="#tech">
            Технологии
          </a>
        </li>
        <li>
          <a className="navtab__link" href="#author">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
