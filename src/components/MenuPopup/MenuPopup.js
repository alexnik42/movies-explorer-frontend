import React from "react";
import Navigation from "../Navigation/Navigation";

import "./MenuPopup.css";

function MenuPopup() {
  const popup = document.querySelector(".menu-popup");
  const searchBarSection = document.querySelector(".search-form");
  const searchBarForm = document.querySelector(".search-form__form");
  const searchBarInput = document.querySelector(".search-form__input");
  const searchBarLogo = document.querySelector(".search-form__logo");
  const searchBarFormContainer = document.querySelector(
    ".search-form__container"
  );

  function handlePopupClose(e) {
    if (
      e.target.classList.contains("menu-popup") ||
      e.target.classList.contains("menu__close-popup")
    ) {
      popup.classList.remove("menu-popup_opened");
      searchBarSection.classList.remove("menu-popup__search-form");
      searchBarForm.classList.remove("menu-popup__search-form-form");
      searchBarInput.classList.remove("menu-popup__search");
      searchBarLogo.classList.remove("menu-popup__search-logo");
      searchBarFormContainer.classList.remove("menu-popup__form-container");
    }
  }

  return (
    <div className="menu-popup" onClick={handlePopupClose}>
      <div className="menu-popup__container">
        <Navigation isLogged={true} />
        <button
          className="menu__close-popup"
          onClick={handlePopupClose}
        ></button>
      </div>
    </div>
  );
}

export default MenuPopup;
