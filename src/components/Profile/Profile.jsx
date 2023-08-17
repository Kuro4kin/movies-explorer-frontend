import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { unlogin } from "../../utils/MainApi";
import "./Profile.css";


function Profile({ loggedIn, user, handleUnlogin }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", defaultValues: {userName: currentUser.name, userEmail: currentUser.email} });

  const [isEditability, setIsEditability] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const handleClickEditButton = () => {
    setIsEditability(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    setIsEditability(false);
  };

  const handleClickSignOutLink = () => {
    unlogin()
      .then(() => handleUnlogin())
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Header loggedIn={loggedIn} openNavigation={toggleNavigation} />
      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__name-container">
            <p className="profile__note">Имя</p>
            <input
              disabled={!isEditability}
              className="profile__input"
/*               placeholder={user.name} */
              {...register("userName", {
                required: "Это поле обязательно для заполнения",
                minLength: { value: 2, message: "Минимальное количество символов: 2" },
                maxLength: 30,
                pattern: { value: /^[a-zA-Zа-яёА-ЯЁ][a-zA-Zа-яёА-ЯЁ\-\s]{1,30}$/, message: "Не допустимые символы" },
                onChange: (e) => {
                  formValue.name = e.target.value;
                },
              })}></input>
          </div>
          <span className="profile__input-span">{errors.userName && errors.userName.message}</span>
          <div className="profile__mail-container">
            <p className="profile__note">E-mail</p>
            <input 
              disabled={!isEditability} 
              type="mail" 
              className="profile__input" 
/*               placeholder={user.mail} */
              {...register("userEmail", {
                required: "Это поле обязательно для заполнения",
                pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Введите корректный адрес электронной почты",
               },
                onChange: (e) => {
                  formValue.email = e.target.value;
                },
              })}></input>
          </div>
          <span className="profile__input-span">{errors.userEmail && errors.userEmail.message}</span>
          {isEditability && (
            <>
              <span className="profile__span-error"></span>
              <ButtonSubmit text="Сохранить" disabled={!isValid}/>
            </>
          )}
        </form>
        {!isEditability && (
          <>
            <button className="profile__button-edit" onClick={handleClickEditButton}>
              Редактировать
            </button>
            <Link className="profile__link-unlogin" to="/signin" onClick={handleClickSignOutLink}>
              Выйти из аккаунта
            </Link>
          </>
        )}
      </main>
      <Navigation
        isNavigationOpen={isNavigationOpen}
        setIsNavigationOpen={setIsNavigationOpen}
        closeNavigation={toggleNavigation}
      />
    </>
  );
}

export default Profile;
