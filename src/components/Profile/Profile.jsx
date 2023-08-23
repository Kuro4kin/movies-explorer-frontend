import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Error from "../Error/Error";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { unlogin, updateUserInfo } from "../../utils/MainApi";
import "./Profile.css";


function Profile({ loggedIn, handleUnlogin, handleUpdateUserInfo }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", defaultValues: {name: currentUser.name, email: currentUser.email} });

  const [isEditability, setIsEditability] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [errCode, setErrCode] = useState(null)


  function toggleNavigation() {
    setIsNavigationOpen(!isNavigationOpen);
  };

  function handleClickEditButton() {
    setIsEditability(true);
  };

  function onSubmit(data, e) {
    e.preventDefault();
    updateUserInfo(data)
    .then((res) => {
      handleUpdateUserInfo(res);
      setIsEditability(false);
    })
    .catch((err) => setErrCode(err));

  };

  function handleClickSignOutLink() {
    unlogin()
      .then(() => {
        handleUnlogin();
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Header loggedIn={loggedIn} openNavigation={toggleNavigation} />
      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__name-container">
            <p className="profile__note">Имя</p>
            <input
              disabled={!isEditability}
              className="profile__input"
              {...register("name", {
                required: "Это поле обязательно для заполнения",
                minLength: { value: 2, message: "Минимальное количество символов: 2" },
                maxLength: 30,
                pattern: { value: /^[a-zA-Zа-яёА-ЯЁ][a-zA-Zа-яёА-ЯЁ\-\s]{1,30}$/, message: "Не допустимые символы" 
              }})}></input>
          </div>
          <span className="profile__input-span">{errors.name && errors.name.message}</span>
          <div className="profile__mail-container">
            <p className="profile__note">E-mail</p>
            <input 
              disabled={!isEditability} 
              type="mail" 
              className="profile__input" 
              {...register("email", {
                required: "Это поле обязательно для заполнения",
                pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Введите корректный адрес электронной почты",
               },
              })}></input>
          </div>
          <span className="profile__input-span">{errors.email && errors.email.message}</span>
          {isEditability && (
            <>
              <Error errCode={errCode}/>
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
