import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Profile.css";
import Header from "../Header/Header";
import Validation from "../Validation/Validation";

function Profile({
  loggedIn,
  handleCurrentUserInfoChange,
  handleLogout,
  currentUser,
  serverError,
  menuPopupOpen,
  menuPopupClose,
}) {
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
  } = Validation();

  const [isError, setIsError] = useState(false);

  const onLogout = () => {
    handleLogout();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(true);
    handleCurrentUserInfoChange(values);
  };

  useEffect(() => {
    setValues(currentUser);
    setIsValid(true);
  }, [currentUser, setValues, setIsValid]);

  return (
    <>
      <Header
        loggedIn={loggedIn}
        menuPopupOpen={menuPopupOpen}
        menuPopupClose={menuPopupClose}
      />
      <form className="profile" onSubmit={handleSubmit}>
        <div className="profile__container">
          <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
          <div className="profile__info">
            <div className="profile__info-container">
              <p className="profile__info-label">Имя</p>
              <input
                className="profile__info-data"
                minLength="2"
                maxLength="30"
                name="name"
                type="text"
                value={values.name || ""}
                onChange={handleChange}
                required
              />
            </div>
            <span className="profile__input-error">
              {errors.name ? errors.name : ""}
            </span>
            <div className="profile__info-container">
              <p className="profile__info-label">Почта</p>
              <input
                className="profile__info-data"
                name="email"
                type="email"
                value={values.email || ""}
                onChange={handleChange}
                required
              />
            </div>
            <span className="profile__input-error">
              {errors.email ? errors.email : ""}
            </span>
          </div>
          <span
            className={`profile__input-error ${
              isError && "profile__input-error_active"
            } ${
              serverError === "Данные успешно изменены!"
                ? "profile__input-success_server"
                : "profile__input-error_server"
            }`}
          >
            {serverError}
          </span>
          <ul className="profile__links">
            <li className="profile__link">
              <button className="profile__link-edit" disabled={!isValid}>
                Редактировать
              </button>
            </li>
            <li className="profile__link">
              <Link className="profile__link-logout" onClick={onLogout} to="/">
                Выйти из аккаунта
              </Link>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
}

export default Profile;
