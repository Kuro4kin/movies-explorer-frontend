import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Logo from "../Logo/Logo";
import { createNewUser } from "../../utils/MainApi";
import "./Register.css";

function Register() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { register, formState: { isValid, errors }  } = useForm({ mode: "onChange" });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewUser(formValue)
      .then((res) => {
        console.log(res);
        navigate('/signin', { replace: true });
      })
      .catch((err) => console.log(err))
  };

  return (
    <section className="register section-register">
      <Logo />
      <h2 className="auth-title">Добро пожаловать!</h2>
      <form className="register__form"  onSubmit={handleSubmit}>
        <label className="register__label">
          Имя
          <input className="register__input auth-input" 
          {...register("userName", {  
            required: "Это поле обязательно для заполнения", 
            minLength: {
              value: 2, 
              message: "Минимальное количество символов: 2"
              },
            maxLength: 30,
            pattern: {
              value: /^[a-zA-Zа-яёА-ЯЁ][a-zA-Zа-яёА-ЯЁ\-\s]{1,30}$/,
              message: "Не допустимые символы",
            },
            onChange: (e) => {
              formValue.name = e.target.value;
            }
            })} />
          <span className="register__input-span">{errors.userName && errors.userName.message}</span>
        </label>
        <label className="register__label">
          E-mail
          <input  className="register__input auth-input" 
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
          <span className="register__input-span">{errors.userEmail && errors.userEmail.message}</span>
        </label>
        <label className="register__label">
          Пароль
          <input type="password" className="register__input auth-input" 
          {...register("userPassword", {  
            required: "Это поле обязательно для заполнения", 
            onChange: (e) => {
              formValue.password = e.target.value
            }
            })}/>
          <span className="register__input-span">{errors.userPassword && errors.userPassword.message}</span>
        </label>
        <span className="regester__api-error-span">{}</span>
        <ButtonSubmit text="Зарегистрироваться" disabled={!isValid} />
      </form>
      <p className="register__question">
      Уже зарегистрированы? &nbsp;
        <Link className="register__question-link" to="/signin">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
