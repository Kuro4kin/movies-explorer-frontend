import { Link } from "react-router-dom"
import imageLogo from "../../images/logo.svg"
import "./Logo.css"

function Logo() {
  return (
    <Link className="header__logo-link" to="/">
      <img className="logo" src={imageLogo} alt="Логотип проекта" />
    </Link>
  )
}

export default Logo;