import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Logo from "../Logo/Logo";
import { login } from "../../utils/MainApi";
import "./Login.css";

function Login({ handleLogin }) {
  const { register, formState: { isValid, errors }  } = useForm({ mode: "onChange" });
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formValue)
      .then((res) => {
        handleLogin();
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <section className="login section-login" >
      <Logo />
      <h2 className="auth-title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          E-mail
          <input className="login__input auth-input" 
          {...register("userEmail", {  
            required: "Это поле обязательно для заполнения",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Введите корректный адрес электронной почты",
            },
            onChange: (e) => {
              formValue.email = e.target.value
            }
            })} />
          <span className="login__input-span">{errors.userEmail && errors.userEmail.message}</span>
        </label>
        <label className="login__label">
          Пароль
          <input className="login__input auth-input" 
          {...register("userPassword", {  
            required: "Это поле обязательно для заполнения", 
            onChange: (e) => {
              formValue.password = e.target.value
            } })}/>
          <span className="login__input-span">{errors.userPassword && errors.userPassword.message}</span>
        </label>
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
