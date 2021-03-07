import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./AuthForm.css";
import headerLogo from "../../images/Header/header__logo.svg";

import Validation from "../Validation/Validation";

function AuthForm({
  title,
  logOption,
  type,
  serverError,
  onSubmit,
  resetErrorMessage,
}) {
  const { values, handleChange, errors, isValid, resetForm } = Validation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleLinkClick = () => {
    resetErrorMessage();
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="auth-form__container">
        <a className="auth-form__logo-link" href="./">
          <img className="auth-form__logo" src={headerLogo} alt="Лого сайта" />
        </a>
        <h3 className="auth-form__title">{title}</h3>
        <fieldset className="auth-form__set">
          {type === "register" && (
            <label className="auth-form__field">
              Имя
              <input
                className="auth-form__input"
                minLength="2"
                maxLength="30"
                name="name"
                type="text"
                onChange={handleChange}
                required
              />
              <span className="auth-form__input-error">
                {errors.name ? errors.name : ""}
              </span>
            </label>
          )}
          <label className="auth-form__field">
            E-mail
            <input
              className="auth-form__input"
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
            <span className="auth-form__input-error">
              {errors.email ? errors.email : ""}
            </span>
          </label>
          <label className="auth-form__field">
            Пароль
            <input
              className="auth-form__input"
              minLength="5"
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
            <span className="auth-form__input-error">
              {errors.password ? errors.password : ""}
            </span>
          </label>
          <span className="auth-form__input-error auth-form__input-error_server">
            {serverError}
          </span>
          <button
            className="auth-form__submit"
            type="submit"
            aria-label="Зарегистрироваться/войти"
            disabled={!isValid}
          >
            {logOption}
          </button>
          {type === "register" ? (
            <p className="auth-form__referral">
              Уже зарегистрированы?{" "}
              <NavLink
                className="auth-form__link"
                to="/signin"
                onClick={handleLinkClick}
              >
                Войти
              </NavLink>
            </p>
          ) : (
            <p className="auth-form__referral">
              Ещё не зарегистрированы?{" "}
              <NavLink
                className="auth-form__link"
                to="/signup"
                onClick={handleLinkClick}
              >
                Регистрация
              </NavLink>
            </p>
          )}
        </fieldset>
      </div>
    </form>
  );
}

export default AuthForm;
