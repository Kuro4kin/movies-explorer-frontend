import { Link } from "react-router-dom";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Logo from "../Logo/Logo";
import "./Register.css";

function Register() {
  return (
    <section className="register section-register">
      <Logo />
      <h2 className="auth-title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__label">
          Имя
          <input type="name" required minLength="2" maxLength="30" className="register__input auth-input" />
          <span className="register__input-span"></span>
        </label>
        <label className="register__label">
          E-mail
          <input type="email" required className="register__input auth-input" />
          <span className="register__input-span"></span>
        </label>
        <label className="register__label">
          Пароль
          <input type="password" required className="register__input auth-input" />
          <span className="register__input-span"></span>
        </label>
        <ButtonSubmit text="Зарегистрироваться" />
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
