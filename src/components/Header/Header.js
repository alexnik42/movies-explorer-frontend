import { NavLink } from "react-router-dom";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import promoHeaderLogo from "../../images/Header/header__logo.svg";
import menuIcon from "../../images/Header/header__short-menu-open-logo.svg";

function Header({ loggedIn, menuPopupOpen, menuPopupClose }) {
  return (
    <header className="header">
      <NavLink className="header__logo-link" to="/">
        <img
          className="header__logo"
          src={promoHeaderLogo}
          alt="Логотип сайта"
        />
      </NavLink>
      <div className="header__long-menu">
        <Navigation loggedIn={loggedIn} />
      </div>
      <div className="header__short-menu">
        {loggedIn ? (
          <button className="header__short-menu-open" onClick={menuPopupOpen}>
            <img
              src={menuIcon}
              className="header__short-menu-open-logo"
              alt="Иконка меню"
            />
          </button>
        ) : (
          <Navigation
            loggedIn={loggedIn}
            menuPopupOpen={menuPopupOpen}
            menuPopupClose={menuPopupClose}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
