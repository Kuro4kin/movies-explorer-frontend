import { Link } from "react-router-dom";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Logo from "../Logo/Logo";
import "./Login.css";

function Login() {
  return (
    <section className="login section-login">
      <Logo />
      <h2 className="auth-title">Рады видеть!</h2>
      <form className="login__form">
        <label className="login__label">
          E-mail
          <input required type="email" className="login__input auth-input" />
          <span className="login__input-span"></span>
        </label>
        <label className="login__label">
          Пароль
          <input required type="password" className="login__input auth-input" />
          <span className="login__input-span"></span>
        </label>
        <ButtonSubmit text="Войти" />
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
