
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  const location = useLocation();
  const navigationClassName = `navigation ${props.isNavigationOpen && "navigation_open"}`;
  const handleClickButtonClose = () => {
    props.closeNavigation()
  }

  return(
    <nav className={navigationClassName}>
      <div className="navigation__container">
        <div className="navigation__menu">
          <button className="navigation__button-close" onClick={handleClickButtonClose}></button>
          <Link  className={location.pathname === "/" ? "navigation__link navigation__link_active" : "navigation__link"} to="/">Главная</Link>
          <Link className={location.pathname === "/movies" ? "navigation__link navigation__link_active" : "navigation__link"} to="/movies">Фильмы</Link>
          <Link className={location.pathname === "/saved-movies" ? "navigation__link navigation__link_active" : "navigation__link"} to="/saved-movies">Сохранённые фильмы</Link>
        </div>
        <Link to="/profile" className='navigation__account-link'>Аккаунт
            <div className='header__account-image'></div>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation;


