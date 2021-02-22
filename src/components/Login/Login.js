import "./Login.css";
import Form from "../Form/Form";

function Login() {
  function handleChange(e) {
    const errorElement = document.querySelector(`#${e.target.id}-error`);
    if (e.target.value.length < 5 && e.target.value.length > 0) {
      errorElement.classList.add("form__input-error_active");
      errorElement.textContent = "Что-то пошло не так...";
    } else {
      errorElement.classList.remove("form__input-error_active");
      errorElement.textContent = "";
    }
  }

  return (
    <Form name={"login"} title={"Рады видеть!"} logOption={"Войти"}>
      <label className="form__field">
        E-mail
        <input
          className="form__input"
          id="user-email-input"
          minLength="2"
          maxLength="40"
          name="userEmail"
          type="email"
          onChange={handleChange}
          required
        />
        <span className="form__input-error" id="user-email-input-error"></span>
      </label>
      <label className="form__field">
        Пароль
        <input
          className="form__input"
          id="user-password-input"
          minLength="5"
          maxLength="20"
          name="userPassword"
          type="password"
          onChange={handleChange}
          required
        />
        <span
          className="form__input-error"
          id="user-password-input-error"
        ></span>
      </label>
    </Form>
  );
}

export default Login;
