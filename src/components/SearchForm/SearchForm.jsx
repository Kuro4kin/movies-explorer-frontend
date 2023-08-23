import { useState } from "react";
import { useForm } from "react-hook-form";

import "./SearchForm.css";

function SearchForm({ handleSubmitForm, keyWordValue, onlyShortFilmsValue }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", defaultValues: {keyWord: keyWordValue, onlyShortFilms: onlyShortFilmsValue}
 });

  function onSubmit(data, evt) {
    evt.preventDefault();
    handleSubmitForm(data);
  }

  return (
    <form className="section-search-form search-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="search-form__container">
        <input
          className="search-form__input"
          placeholder="Фильм"
          {...register("keyWord", { required: "Нужно ввести ключевое слово" })}
        />
        <button type="submit" className="search-form__button"></button>
      </div>
      <span className="search-form__input-span">{errors.keyWord && errors.keyWord.message}</span>
      <label className="search-form__label-checkbox">
        <input 
          className="search-form__checkbox" 
          type="checkbox" 
          {...register("onlyShortFilms")}>
        </input>
        <span className="search-form__quasi-checkbox"></span>
        <span className="search-form__checkbox-subtitle">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
