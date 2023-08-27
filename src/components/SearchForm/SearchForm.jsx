import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import "./SearchForm.css";

function SearchForm(props) {
  const location = useLocation();
  const [keyWordValue, setKeyWordValue] = useState(props.keyWordValue);
  const [onlyShortFilmsValue, setOnlyShortFilmsValue] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange",  defaultValues: {keyWord: keyWordValue, onlyShortFilms: onlyShortFilmsValue}
 });

  function onSubmit(data, evt) {
    evt.preventDefault();
    console.log(keyWordValue, onlyShortFilmsValue);
    props.handleSubmitForm(data.keyWord, data.onlyShortFilms);
  }

  function handleChangeCheckbox() {
    props.handleChangeCheckBox(!onlyShortFilmsValue)
  }

  return (
    <form className="section-search-form search-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="search-form__container">
        <input
          className="search-form__input"
          placeholder="Фильм"
          {...register("keyWord", { required: "Нужно ввести ключевое слово",
           onChange: (e) => {
            setKeyWordValue(e.target.value);
          }})}
        />
        <button type="submit" className="search-form__button"></button>
      </div>
      <span className="search-form__input-span">{errors.keyWord && errors.keyWord.message}</span>
      <label className="search-form__label-checkbox">
        <input 
          className="search-form__checkbox" 
          type="checkbox"
          onClick={handleChangeCheckbox}
          {...register("onlyShortFilms", {
            onChange: (e) => {
              setOnlyShortFilmsValue(!onlyShortFilmsValue);
            }})}>
        </input>
        <span className="search-form__quasi-checkbox"></span>
        <span className="search-form__checkbox-subtitle">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
