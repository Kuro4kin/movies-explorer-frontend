import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project-info" id="project">
      <article className="project-info__column">
        <h2 className="article-title">О проекте</h2>
        <ul className="project-info__row">
          <li className="project-info__row-item">
            <p className="project-info__subtitle">Дипломный проект включал 5 этапов</p>
            <p className="project-info__description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="project-info__row-item">
            <p className="project-info__subtitle">На выполнение диплома ушло 5 недель</p>
            <p className="project-info__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="project-info__timeline">
          <p className="project-info__backend-timeline">1 неделя</p>
          <p className="project-info__frontend-timeline">4 недели</p>
        </div>
        <div className="project-info__row-span">
          <p className="project-info__backend-span">Back-end</p>
          <p className="project-info__frontend-span">Front-end</p>
        </div>
      </article>
    </section>
  );
}

export default AboutProject;
