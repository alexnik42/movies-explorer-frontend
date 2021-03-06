import React from "react";

import "./Login.css";
import AuthForm from "../AuthForm/AuthForm";

function Login({ handleLogin, serverError, resetErrorMessage }) {
  return (
    <AuthForm
      title={"Рады видеть!"}
      logOption={"Войти"}
      type={"login"}
      serverError={serverError}
      onSubmit={handleLogin}
      resetErrorMessage={resetErrorMessage}
    ></AuthForm>
  );
}

export default Login;
