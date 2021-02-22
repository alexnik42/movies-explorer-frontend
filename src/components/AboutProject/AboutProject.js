import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about-project" id="about-project">
      <div className="about-project__container">
        <div className="promo__section-title">
          <h2 className="promo__section-title-text">О проекте</h2>
        </div>
        <div className="about-project__description">
          <div className="about-project__description-section">
            <h3 className="about-project__description-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__description-section">
            <h3 className="about-project__description-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__timeline_backend">
            <p className="about-project__timeline_backend_text">1 неделя</p>
          </div>
          <div className="about-project__timeline_frontend">
            <p className="about-project__timeline_frontend_text">4 недели</p>
          </div>
        </div>
        <div className="about-project__timeline-description">
          <div className="about-project__timeline-description_backend">
            <p className="about-project__timeline-description_backend_text">
              Back-end
            </p>
          </div>
          <div className="about-project__timeline-description_frontend">
            <p className="about-project__timeline-description_frontend_text">
              Front-end
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
