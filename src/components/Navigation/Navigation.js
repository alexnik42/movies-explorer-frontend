import "./Navigation.css";
import accountLogo from "../../images/Navigation/nav__account-logo.svg";

function Navigation({ isLogged }) {
  return isLogged ? (
    <nav className="nav__container">
      <ul className="nav__sign">
        <li className="nav__films">
          <a className="nav__link" href="./">
            Главная
          </a>
        </li>
        <li className="nav__films">
          <a className="nav__link" href="./movies">
            Фильмы
          </a>
        </li>
        <li className="nav__saved-films">
          <a className="nav__link" href="./saved-movies">
            Сохранённые фильмы
          </a>
        </li>
        <li className="nav__account-container">
          <a className="nav__link nav__link-account-logo" href="./profile">
            <img
              src={accountLogo}
              className="nav__account-logo"
              alt="Логотип аккаунта"
            />
          </a>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="nav__container-not-logged">
      <ul className="nav__sign_not-logged">
        <li className="nav__signup">
          <a className="nav__link-not-logged" href="./signup">
            Регистрация
          </a>
        </li>
        <li className="nav__signin-box">
          <a className="nav__link-not-logged" href="./signin">
            <p className="nav__signin-text">Войти</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
