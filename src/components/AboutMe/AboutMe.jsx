import authorPhoto from "../../images/exapmle_photo.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="author-info" id="author">
      <article className="author-info__column">
        <h2 className="article-title">Студент</h2>
        <div className="author-info__row">
          <div className="author-info__text">
            <h3 className="author-info__title">Александр</h3>
            <p className="author-info__subtitle">Веб-разработчик, 33 года</p>
            <p className="author-info__biography">
              Я живу в Ростове-на-Дону. У меня есть жена и сын. Я люблю юмор, слушать музыку и гулять. Вскоре я завершу
              проект, которому посвятил очень много времени, не связанный с программированием, и сменю профессию. Пока я
              готовлюсь к этому: прошёл курс по веб-разработке, работаю над pet-проектами для портфолио,
              стажируюсь🙃коплю ману, качаю скиллы...
            </p>
            <a class="author-info__gh-link" href="https://github.com/Kuro4kin" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
          <img className="author-info__photo" alt="Фото Разработчика" src={authorPhoto} />
        </div>
        <p className="author-info__portfolio-subtitle">Портфолио</p>
        <ul className="author-info__portfolio">
          <li className="author-info__portfolio-item">
            <a
              href="https://github.com/Kuro4kin/how-to-learn"
              target="_blank"
              rel="noreferrer"
              className="author-info__portfolio-link">
              <h4 className="author-info__portfolio-title">Статичный сайт</h4>
              <div className="author-info__portfolio-icon"></div>
            </a>
          </li>
          <li className="author-info__portfolio-item">
            <a
              href="https://kuro4kin.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
              className="author-info__portfolio-link">
              <h4 className="author-info__portfolio-title">Адаптивный сайт</h4>
              <div className="author-info__portfolio-icon"></div>
            </a>
          </li>
          <li className="author-info__portfolio-item">
            <a
              href="https://github.com/Kuro4kin/mesto-react"
              target="_blank"
              rel="noreferrer"
              className="author-info__portfolio-link">
              <h4 className="author-info__portfolio-title">Одностраничное приложение</h4>
              <div className="author-info__portfolio-icon"></div>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default AboutMe;
