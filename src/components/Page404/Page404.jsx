import { useNavigate } from "react-router-dom";
import "./Page404.css"

function Page404() {
  const navigate = useNavigate()

  function handleButtonClick() {
    navigate(-1);
  }

  return (
    <section className="page404">
      <h2 className="page404__title">404</h2>
      <p className="page404__descritpion">Страница не найдена </p>
      <button  className="page404__button" onClick={handleButtonClick}>Назад</button>
    </section>
  )
}

export default Page404;