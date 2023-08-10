import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="section-search-form search-form">
      <div className="search-form__container">
        <input className="search-form__input" placeholder="Фильм" />
        <button type="submit" className="search-form__button"></button>
      </div>
      <label className="search-form__label-checkbox">
        <input  className="search-form__checkbox" type="checkbox"></input>
        <span className="search-form__quasi-checkbox"></span>
        <span className="search-form__checkbox-subtitle">Короткометражки</span>
      </label>
    </form>
    
  )
}

export default SearchForm;