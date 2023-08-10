import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(props) {
  const location = useLocation();
  const headerNavbarClassName = `header__navbar ${props.loggedIn && "header__navbar_login"}`;

  return (
    <header className="header header__container">
      <Logo />
      <ul className={headerNavbarClassName}>
        {props.loggedIn && (
          <li>
            <Link
              className={location.pathname === "/movies" ? "header__link header__link_active" : "header__link"}
              to="/movies">
              Фильмы
            </Link>
          </li>
        )}
        {props.loggedIn && (
          <li>
            <Link
              className={location.pathname === "/saved-movies" ? "header__link header__link_active" : "header__link"}
              to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </li>
        )}
        {!props.loggedIn && (
          <li>
            <Link className="header__link-registration" to="/signup">
              Регистрация
            </Link>
          </li>
        )}
      </ul>
      {props.loggedIn && (
        <>
          <Link to="/profile" className="header__account-link">
            Аккаунт
            <div className="header__account-image"></div>
          </Link>
          <button className="header__button-menu" onClick={props.openNavigation}>
            <span className="header__navicon-line"></span>
            <span className="header__navicon-line"></span>
            <span className="header__navicon-line"></span>
          </button>
        </>
      )}
      {!props.loggedIn && (
        <Link to="/signin" className="header__login-link">
          Войти
        </Link>
      )}
    </header>
  );
}

export default Header;
