import "./Portfolio.css";
import projectLink from "../../images/Portfolio/portfolio__project-link.svg";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <p className="portfolio__title">Портфолио</p>
        <ul className="portfolio__project-container">
          <li className="portfolio__project">
            <a
              className="portfolio__link"
              href="https://github.com/alexnik42/mesto"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__project-name">Статичный сайт</p>
              <img src={projectLink} alt="Ссылка на проект" />
            </a>
          </li>
          <li className="portfolio__project">
            <a
              className="portfolio__link"
              href="https://github.com/alexnik42/mesto-react"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__project-name">Адаптивный сайт</p>
              <img src={projectLink} alt="Ссылка на проект" />
            </a>
          </li>
          <li className="portfolio__project">
            <a
              className="portfolio__link"
              href="https://github.com/alexnik42/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__project-name">
                Одностраничное приложение
              </p>
              <img src={projectLink} alt="Ссылка на проект" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
