import { NavLink } from "react-router-dom";

import "./Navigation.css";
import accountLogo from "../../images/Navigation/nav__account-logo.svg";

function Navigation({ loggedIn, menuPopupOpen, menuPopupClose }) {
  return loggedIn ? (
    <nav className="nav__container">
      <ul className="nav__sign">
        <li className="nav__films">
          <NavLink className="nav__link" to="/" onClick={menuPopupClose}>
            Главная
          </NavLink>
        </li>
        <li className="nav__films">
          <NavLink className="nav__link" to="/movies" onClick={menuPopupClose}>
            Фильмы
          </NavLink>
        </li>
        <li className="nav__saved-films">
          <NavLink
            className="nav__link"
            to="/saved-movies"
            onClick={menuPopupClose}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="nav__account-container">
          <NavLink
            className="nav__link nav__link-account-logo"
            to="/profile"
            onClick={menuPopupClose}
          >
            <img
              src={accountLogo}
              className="nav__account-logo"
              alt="Логотип аккаунта"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="nav__container-not-logged">
      <ul className="nav__sign_not-logged">
        <li className="nav__signup">
          <NavLink className="nav__link-not-logged" to="/signup">
            Регистрация
          </NavLink>
        </li>
        <li className="nav__signin-box">
          <NavLink className="nav__link-not-logged" to="/signin">
            <p className="nav__signin-text">Войти</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
