import { Link } from "react-router-dom";
import "./Page404.css"

function Page404() {
  return (
    <section className="page404">
      <h2 className="page404__title">404</h2>
      <p className="page404__descritpion">Страница не найдена </p>
      <Link to="/" className="page404__link">Назад</Link>
    </section>
  )
}

export default Page404;