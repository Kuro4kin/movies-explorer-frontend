import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Error from "../Error/Error";
import Logo from "../Logo/Logo";
import { login } from "../../utils/MainApi";
import "./Login.css";

function Login({ handleLogin }) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const [errCode, setErrCode] = useState(null)

  function onSubmit(data, e) {
    e.preventDefault();
    login(data)
      .then((res) => {
        navigate("/movies", { replace: true });
        handleLogin();
      })
      .catch((err) => {
        console.log(err);
        setErrCode(err);
      });
  };

  return (
    <section className="login section-login">
      <Logo />
      <h2 className="auth-title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="login__label">
          E-mail
          <input
            className="login__input auth-input"
            {...register("email", {
              required: "Это поле обязательно для заполнения",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Введите корректный адрес электронной почты",
              },
            })}
          />
          <span className="login__input-span">{errors.email && errors.email.message}</span>
        </label>
        <label className="login__label">
          Пароль
          <input
            className="login__input auth-input"
            type="password"
            {...register("password", {
              required: "Это поле обязательно для заполнения",
            })}
          />
          <span className="login__input-span">{errors.password && errors.password.message}</span>
        </label>
        <Error errCode={errCode} />
        <ButtonSubmit text="Войти" disabled={!isValid} />
      </form>
      <p className="login__question">
        Ещё не зарегистрированы? &nbsp;
        <Link className="login__question-link" to="/signup">
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
