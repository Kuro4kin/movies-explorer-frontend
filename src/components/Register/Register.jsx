import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Error from "../Error/Error";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Logo from "../Logo/Logo";
import { createNewUser, login } from "../../utils/MainApi";
import "./Register.css";

function Register({ loggedIn, handleLogin }) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const [errCode, setErrCode] = useState(null);
  const [isFormDisabled, setIsFormDisabled] = useState(false)


  function onSubmit(data, e) {
    setIsFormDisabled(true);
    e.preventDefault();
    createNewUser(data)
      .then((res) => {
        login({ email: data.email, password: data.password })
          .then(() => {
            handleLogin();
            navigate("/movies", { replace: true });
          })
          .catch((err) => setErrCode(err));
      })
      .catch((err) => setErrCode(err))
      .finally(() => setIsFormDisabled(false));
  }

  return (
    <>
      {loggedIn ? (
        <Navigate to="/movies" />
      ) : (
        <section className="register section-register">
          <Logo />
          <h2 className="auth-title">Добро пожаловать!</h2>
          <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
            <label className="register__label">
              Имя
              <input
                className="register__input auth-input"
                {...register("name", {
                  required: "Это поле обязательно для заполнения",
                  minLength: {
                    value: 2,
                    message: "Минимальное количество символов: 2",
                  },
                  maxLength: 30,
                  pattern: {
                    value: /^[a-zA-Zа-яёА-ЯЁ][a-zA-Zа-яёА-ЯЁ\-\s]{1,30}$/,
                    message: "Не допустимые символы",
                  },
                })}
              />
              <span className="register__input-span">{errors.name && errors.name.message}</span>
            </label>
            <label className="register__label">
              E-mail
              <input
                className="register__input auth-input"
                {...register("email", {
                  required: "Это поле обязательно для заполнения",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Введите корректный адрес электронной почты",
                  },
                })}
              />
              <span className="register__input-span">{errors.email && errors.email.message}</span>
            </label>
            <label className="register__label">
              Пароль
              <input
                type="password"
                className="register__input auth-input"
                {...register("password", {
                  required: "Это поле обязательно для заполнения",
                })}
              />
              <span className="register__input-span">{errors.password && errors.password.message}</span>
            </label>
            <Error errCode={errCode} />
            <ButtonSubmit text="Зарегистрироваться" disabled={!isValid || isFormDisabled} />
          </form>
          <p className="register__question">
            Уже зарегистрированы? &nbsp;
            <Link className="register__question-link" to="/signin">
              Войти
            </Link>
          </p>
        </section>
      )}
    </>
  );
}

export default Register;
