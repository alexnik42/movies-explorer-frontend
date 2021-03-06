import React from "react";

import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";

function Register({ handleRegistration, serverError, resetErrorMessage }) {
  return (
    <AuthForm
      title={"Добро пожаловать!"}
      logOption={"Зарегистрироваться"}
      type="register"
      serverError={serverError}
      onSubmit={handleRegistration}
      resetErrorMessage={resetErrorMessage}
    ></AuthForm>
  );
}

export default Register;
