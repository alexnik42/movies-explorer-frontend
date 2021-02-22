import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__description">Страница не найдена</p>
        <a className="not-found__go-back" href="./">
          Назад
        </a>
      </div>
    </div>
  );
}

export default NotFound;
