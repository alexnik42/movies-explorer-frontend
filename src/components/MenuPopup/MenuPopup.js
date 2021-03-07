import React from "react";
import Navigation from "../Navigation/Navigation";

import "./MenuPopup.css";

function MenuPopup({ loggedIn, menuPopupOpen, menuPopupClose }) {
  return (
    <div className="menu-popup" onClick={menuPopupClose}>
      <div className="menu-popup__container">
        <Navigation
          loggedIn={loggedIn}
          menuPopupOpen={menuPopupOpen}
          menuPopupClose={menuPopupClose}
        />
        <button className="menu__close-popup" onClick={menuPopupClose}></button>
      </div>
    </div>
  );
}

export default MenuPopup;
