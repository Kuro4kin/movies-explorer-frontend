import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

import "./Profile.css";

function Profile({ loggedIn, user }) {
  const [isEditability, setIsEditability] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const handleClickEditButton = () => {
    setIsEditability(true);
  };

  const onClickButtonSave = () => {
    setIsEditability(false);
  };

  return (
    <section className="profile">
      <Header loggedIn={loggedIn} openNavigation={toggleNavigation} />
      <h2 className="profile__title">Привет, {user.name}!</h2>
      <form className="profile__form">
        <div className="profile__name-container">
          <p className="profile__note">Имя</p>
          <input required disabled={!isEditability} className="profile__input" placeholder={user.name}></input>
        </div>
        <div className="profile__mail-container">
          <p className="profile__note">E-mail</p>
          <input
            required
            disabled={!isEditability}
            type="mail"
            className="profile__input"
            placeholder={user.mail}></input>
        </div>
        {isEditability && (
          <>
            <span className="profile__span-error"></span>
            <ButtonSubmit text="Сохранить" onClickButtonSave={onClickButtonSave} />
          </>
        )}
      </form>
      {!isEditability && (
        <>
          <button className="profile__button-edit" onClick={handleClickEditButton}>
            Редактировать
          </button>
          <Link className="profile__link-unlogin" to="/signin">Выйти из аккаунта</Link>
        </>
      )}
      <Navigation
        isNavigationOpen={isNavigationOpen}
        setIsNavigationOpen={setIsNavigationOpen}
        closeNavigation={toggleNavigation}
      />
    </section>
  );
}

export default Profile;
