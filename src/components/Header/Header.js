import React from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import promoHeaderLogo from "../../images/Header/header__logo.svg";
import menuIcon from "../../images/Header/header__short-menu-open-logo.svg";

function Header({ isLogged }) {
  const popup = document.querySelector(".menu-popup");
  const searchBarSection = document.querySelector(".search-form");
  const searchBarForm = document.querySelector(".search-form__form");
  const searchBarInput = document.querySelector(".search-form__input");
  const searchBarLogo = document.querySelector(".search-form__logo");
  const searchBarFormContainer = document.querySelector(
    ".search-form__container"
  );

  function handlePopupOpen() {
    popup.classList.add("menu-popup_opened");
    searchBarSection.classList.add("menu-popup__search-form");
    searchBarForm.classList.add("menu-popup__search-form-form");
    searchBarInput.classList.add("menu-popup__search");
    searchBarLogo.classList.add("menu-popup__search-logo");
    searchBarFormContainer.classList.add("menu-popup__form-container");
  }

  return (
    <header className="header">
      <a className="header__logo-link" href="./">
        <img
          className="header__logo"
          src={promoHeaderLogo}
          alt="Логотип сайта"
        />
      </a>
      <div className="header__long-menu">
        <Navigation isLogged={isLogged} />
      </div>
      <div className="header__short-menu">
        {isLogged ? (
          <button className="header__short-menu-open">
            <img
              src={menuIcon}
              className="header__short-menu-open-logo"
              alt="Иконка меню"
              onClick={handlePopupOpen}
            />
          </button>
        ) : (
          <Navigation isLogged={isLogged} />
        )}
      </div>
    </header>
  );
}

export default Header;
