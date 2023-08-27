import { useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Navigation from "../Navigation/Navigation";
import { moviesFilter } from "../../utils/MoviesFilter";


import "./SavedMovies.css";

function SavedMovies(props) {
  const [stateShortFilmsCheckbox, setStateShortFilmsCheckbox] = useState(false);
  const [keyWordValue, setKeyWordValue] = useState("");
  const [foundMovieCards, setFoundMovieCards] = useState(props.dataMovies)
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function handleSubmitForm(keyWord, onlyShortFilms) {
    setKeyWordValue(keyWord);
    setStateShortFilmsCheckbox(onlyShortFilms);
    setFoundMovieCards(moviesFilter(props.dataMovies, keyWord, onlyShortFilms));
  }

  function handleRemoveSavedMovie(movieId) {
    props.handleRemoveSavedMovie(movieId)
  }

  function toggleNavigation() {
    setIsNavigationOpen(!isNavigationOpen)
  }

  function handleChangeCheckBox(value) {
    setStateShortFilmsCheckbox(value)
    setFoundMovieCards(moviesFilter(props.dataMovies, keyWordValue, value))
  }

  return(
    <>
      <Header loggedIn={props.loggedIn} openNavigation={toggleNavigation}/> 
      <main className="saved-movies">
        <SearchForm handleSubmitForm={handleSubmitForm} stateShortFilmsCheckbox={false} handleChangeCheckBox={handleChangeCheckBox}/>
        <MoviesCardList dataMovies={foundMovieCards} handleRemoveSavedMovie={handleRemoveSavedMovie}/>
      </main>
      <Navigation isNavigationOpen={isNavigationOpen} setIsNavigationOpen={setIsNavigationOpen} closeNavigation={toggleNavigation}/>
      <Footer />
    </>
  )
}

export default SavedMovies;
