import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="tech">
      <article className="techs__column">
        <h2 className="article-title">Технологии</h2>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__row">
          <li className="techs__row-item">HTML</li>
          <li className="techs__row-item">CSS</li>
          <li className="techs__row-item">JS</li>
          <li className="techs__row-item">React</li>
          <li className="techs__row-item">Git</li>
          <li className="techs__row-item">Express.js</li>
          <li className="techs__row-item">mongoDB</li>
        </ul>
      </article>
    </section>
  );
}

export default Techs;
