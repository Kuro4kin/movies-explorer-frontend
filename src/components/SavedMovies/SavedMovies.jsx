import { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Navigation from "../Navigation/Navigation";


import "./SavedMovies.css";

function SavedMovies(props) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);

  function handleRemoveSavedMovie(movieId) {
    props.handleRemoveSavedMovie(movieId)
  }

  function toggleNavigation() {
    setIsNavigationOpen(!isNavigationOpen)
  }

  
  return(
    <>
      <Header loggedIn={props.loggedIn} openNavigation={toggleNavigation}/> 
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList dataMovies={props.dataMovies} handleRemoveSavedMovie={handleRemoveSavedMovie}/>
      </main>
      <Navigation isNavigationOpen={isNavigationOpen} setIsNavigationOpen={setIsNavigationOpen} closeNavigation={toggleNavigation}/>
      <Footer />
    </>
  )
}

export default SavedMovies;
