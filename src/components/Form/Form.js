import "./Form.css";
import headerLogo from "../../images/Header/header__logo.svg";

function Form({ name, title, logOption, referalText, children }) {
  return (
    <div className="user-form">
      <div className="user-form__container">
        <a className="user-form__logo-link" href="./">
          <img className="user-form__logo" src={headerLogo} alt="Лого сайта" />
        </a>
        <h3 className="user-form__title">{title}</h3>
        <form className="form" method="POST" name={`form_${name}`} noValidate>
          <fieldset className="form__set">
            {children}
            <button
              className="form__submit"
              type="submit"
              aria-label="Зарегистрироваться/войти"
            >
              {logOption}
            </button>
            {name === "signup" ? (
              <p className="form__referral">
                Уже зарегистрированы?{" "}
                <a className="form__link" href="./signin">
                  Войти
                </a>
              </p>
            ) : (
              <p className="form__referral">
                Ещё не зарегистрированы?{" "}
                <a className="form__link" href="./signup">
                  Регистрация
                </a>
              </p>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Form;
