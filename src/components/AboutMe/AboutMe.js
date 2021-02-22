import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import authorPhoto from "../../images/AboutMe/about-me__photo.png";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me__container">
        <div className="promo__section-title">
          <h2 className="promo__section-title-text">Студент</h2>
        </div>
        <div className="about-me__author-container">
          <div className="about-me__author">
            <h3 className="about-me__author_name">Виталий</h3>
            <p className="about-me__author_occupation">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__author_bio">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="about-me__social-links">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="about-me__social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="about-me__social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img
            className="about-me__photo"
            src={authorPhoto}
            alt="Личное фото"
          />
        </div>
        <Portfolio />
      </div>
    </div>
  );
}

export default AboutMe;
