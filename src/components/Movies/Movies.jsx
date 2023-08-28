import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Error from "../Error/Error";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import { moviesFilter } from "../../utils/MoviesFilter";
import { getAllMovies } from "../../utils/MoviesApi";
import { useResize } from "../../hooks/useMediaQuery";
import "./Movies.css";

function Movies(props) {
  const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem("filterMovies")));
  const [renderMovieCards, setRenderMovieCards] = useState(JSON.parse(localStorage.getItem("renderMovies")));
  const [keyWordValue, setKeyWordValue] = useState(localStorage.getItem("keyWordValue"));
  const [stateShortFilmsCheckbox, setStateShortFilmsCheckbox] = useState(
    JSON.parse(localStorage.getItem("onlyShortFilms"))
  );
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [stateButtonAdd, setStateButtonAdd] = useState(JSON.parse(localStorage.getItem("stateButtonAdd")))
  const [isMovieNotFound, setIsMovieNotFound] = useState(false);
  const [IsSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false)

  const { isScreenLg, isScreenMd } = useResize();

  const numberRenderCards = isScreenLg ? 12 : isScreenMd ? 8 : 5;
  const numberAddCards = isScreenLg ? 3 : 2;


  function handleSubmit(keyWord, onlyShortFilms) {
    setIsSubmitButtonDisable(true)
    setIsMovieNotFound(false);
    localStorage.setItem("keyWordValue", keyWord);
    localStorage.setItem("onlyShortFilms", onlyShortFilms);
    setIsPreloaderOpen(true);
    getAllMovies()
      .then((res) => {
        const filterMovies = moviesFilter(res, keyWord, onlyShortFilms);
        setFoundMovies(filterMovies);
        localStorage.setItem("filterMovies", JSON.stringify(filterMovies));
        setRenderMovieCards(filterMovies.slice(0, numberRenderCards));
        localStorage.setItem("renderMovies", JSON.stringify(filterMovies.slice(0, numberRenderCards)));
        setStateButtonAdd(true)
        localStorage.setItem("stateButtonAdd", true)
        if (filterMovies.length === 0) {
          setIsMovieNotFound(true);
          setStateButtonAdd(false);
          localStorage.setItem("stateButtonAdd", false)
        }
        else if (filterMovies.length <= numberRenderCards) {
          setStateButtonAdd(false);
          localStorage.setItem("stateButtonAdd", false)
        } 
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderOpen(false);
        setIsSubmitButtonDisable(false)
      });
  }

  function handleChangeCheckBox(value) {
    setIsMovieNotFound(false);
    setStateButtonAdd(true);
    setStateShortFilmsCheckbox(value);
    localStorage.setItem("onlyShortFilms", value)
    const filterMovies = (moviesFilter(foundMovies, keyWordValue, value));
    if (filterMovies) {
      setRenderMovieCards(filterMovies.slice(0, numberRenderCards));
      localStorage.setItem("renderMovies", JSON.stringify(filterMovies.slice(0, numberRenderCards)));
      if (filterMovies.length === 0) {
        setIsMovieNotFound(true);
      }
      if (filterMovies.length <= numberRenderCards) {
        setStateButtonAdd(false);
        localStorage.setItem("stateButtonAdd", false);
      } else {
        setStateButtonAdd(true);
        localStorage.setItem("stateButtonAdd", true);
      }
    }
  }

  function showMoreMovies() {
    setRenderMovieCards(
      renderMovieCards.concat(foundMovies.slice(renderMovieCards.length, renderMovieCards.length + numberAddCards)));
    localStorage.setItem("renderMovies", JSON.stringify(foundMovies.slice(0, renderMovieCards.length + numberAddCards)));
    if ((foundMovies.length - renderMovieCards.length) <= numberAddCards) {
      setStateButtonAdd(false);
      localStorage.setItem("stateButtonAdd", false)
    }
  }

  function handleSaveMovie(data) {
    props.handleSaveMovie(data);
  }

  function handleRemoveSavedMovie(movieId) {
    props.handleRemoveSavedMovie(movieId);
  }

  function toggleNavigation() {
    setIsNavigationOpen(!isNavigationOpen);
  }

  return (
    <>
      <Header loggedIn={props.loggedIn} openNavigation={toggleNavigation} />
      <main className="movies">
        <SearchForm
          handleSubmitForm={handleSubmit}
          keyWordValue={keyWordValue}
          stateShortFilmsCheckbox={stateShortFilmsCheckbox}
          handleChangeCheckBox={handleChangeCheckBox}
          IsSubmitButtonDisable={IsSubmitButtonDisable}
        />
        <Preloader isPreloaderOpen={isPreloaderOpen} />
        {isMovieNotFound && <span className="movies__span">Ничего не найдено</span>}
        <Error />
        <MoviesCardList
          dataMovies={renderMovieCards}
          userMovies={props.userMovies}
          showMoreMovies={showMoreMovies}
          handleSaveMovie={handleSaveMovie}
          handleRemoveSavedMovie={handleRemoveSavedMovie}
          stateButtonAdd={stateButtonAdd}
        />
      </main>
      <Navigation
        isNavigationOpen={isNavigationOpen}
        setIsNavigationOpen={setIsNavigationOpen}
        closeNavigation={toggleNavigation}
      />
      <Footer />
    </>
  );
}

export default Movies;
