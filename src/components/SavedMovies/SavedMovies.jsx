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
  
  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  
  return(
    <main className="saved-movies">
      <Header loggedIn={props.loggedIn} openNavigation={toggleNavigation}/> 
      <SearchForm />
      <MoviesCardList dataMovies={props.dataMovies} user={props.user} />
      <Navigation isNavigationOpen={isNavigationOpen} setIsNavigationOpen={setIsNavigationOpen} closeNavigation={toggleNavigation}/>
      <Footer />
    </main>
  )
}

export default SavedMovies;
