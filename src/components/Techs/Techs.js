import "./Techs.css";

function Techs() {
  return (
    <div className="techs" id="techs">
      <div className="tech__container">
        <div className="promo__section-title">
          <h2 className="promo__section-title-text">Технологии</h2>
        </div>
        <div className="techs__title-container">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__technology-list-container">
          <li className="techs__technology-list-bullet">
            <p className="techs__technology-list-tech">HTML</p>
          </li>
          <li className="techs__technology-list-bullet">
            <p className="techs__technology-list-tech">CSS</p>
          </li>
          <li className="techs__technology-list-bullet">
            <p className="techs__technology-list-tech">JS</p>
          </li>
          <li className="techs__technology-list-bullet">
            <p className="techs__technology-list-tech">React</p>
          </li>
          <li className="techs__technology-list-bullet">
            <p className="techs__technology-list-tech">Git</p>
          </li>
          <li className="techs__technology-list-bullet">
            <p className="techs__technology-list-tech">Express.js</p>
          </li>
          <li className="techs__technology-list-bullet">
            <p className="techs__technology-list-tech">mongoDB</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
