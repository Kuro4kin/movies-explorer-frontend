import { useState } from "react";
import { useLocation } from "react-router-dom";
import { removeMovie, saveMovie } from "../../utils/MainApi";
import "./MoviesCard.css";

function  MoviesCard(props) {
  const isLiked = props.movie._id ? true : props.userMovies.some((i) => i.movieId === props.movie.id);

  const [isCardHover, setIsCardHover] = useState(false);
  const [isLike, setIsLike] = useState(isLiked);

  const location = useLocation();

  function handleDislike() {
    const savedMovie = props.userMovies.filter((i) => i.movieId === props.movie.id)[0];
    removeMovie(savedMovie._id)
      .then(() => {
        setIsLike(!isLike);
        props.handleRemoveSavedMovie(savedMovie._id);
      })
      .catch((err) => console.log(err))
  }

  function handleLike() {
    saveMovie({
      country: props.movie.country,
      director: props.movie.director,
      duration: props.movie.duration,
      year: props.movie.year,
      description: props.movie.description,
      image: `https://api.nomoreparties.co${props.movie.image.url}`,
      trailerLink: props.movie.trailerLink,
      nameRU: props.movie.nameRU,
      nameEN: props.movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${props.movie.image.formats.thumbnail.url}`,
      movieId: props.movie.id,
    })
      .then((newSavedMovie) => {
        props.handleSaveMovies(newSavedMovie);
        setIsLike(!isLike);
      })
      .catch((err) => console.log(err));
  }

  function handleMouseOver() {
    setIsCardHover(true);
  }

  function handleMouseLeave() {
    setIsCardHover(false);
  }

  function handleButtonRemoveClick() {
    removeMovie(props.movie._id)
      .then(() => {
        props.handleRemoveSavedMovie(props.movie._id);
      })
      .catch((err) => console.log(err))
  }

  return (
    <li className="movie-card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <a className="movie-card__link-wrapper" href={props.movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          alt="Постер фильма"
          src={
            location.pathname === "/movies" ? `https://api.nomoreparties.co${props.movie.image.url}` : props.movie.image
          }
          className="movie-card__image"
        />
      </a>
      <div className="movie-card__container">
        <h4
          className={
            location.pathname === "/movies"
              ? "movie-card__title"
              : "movie-card__title movie-card__title_page_saved-movie"
          }>
          {props.movie.nameRU}
        </h4>
        {location.pathname === "/movies" && (
          <button
            className={`movie-card__button-like ${isLike && "movie-card__button-like_active"}`}
            onClick={isLike ? handleDislike : handleLike}></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button
            className={isCardHover ? "movie-card__button-remove_active" : "movie-card__button-remove"}
            onClick={handleButtonRemoveClick}></button>
        )}
      </div>
      <p className="movie-card__subtitle">
        {!Math.trunc(props.movie.duration / 60)
          ? `${props.movie.duration}мин`
          : `${Math.trunc(props.movie.duration / 60)}ч ${
              props.movie.duration % (Math.trunc(props.movie.duration / 60) * 60)
            }м`}
      </p>
    </li>
  );
}

export default MoviesCard;
