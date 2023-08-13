import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie, user }) {
  const location = useLocation();
  const [isCardHover, setIsCardHover] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const iLiked = movie.likes.some((i) => i === user.id);
  const buttonLikeClassName = `movie-card__button-like ${(iLiked || isLiked) && "movie-card__button-like_active"}`;
  const buttonRemoveClassName = isCardHover ? "movie-card__button-remove_active" : "movie-card__button-remove";
  const handleMouseOver = () => {
    setIsCardHover(true);
  };
  const handleMouseLeave = () => {
    setIsCardHover(false);
  };
  const handleButtonLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleButtonRemoveClick = () => {
    console.log("Что-то удалится")
  }
  return (
    <li className="movie-card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <img alt="Постер фильма" src={movie.image} className="movie-card__image" />
      <div className="movie-card__container">
        <h4 className={location.pathname === "/movies" ? "movie-card__title" : "movie-card__title movie-card__title_page_saved-movie"}>{movie.nameRU}</h4>
        <button className={location.pathname === "/movies" ? buttonLikeClassName : buttonRemoveClassName} onClick={location.pathname === "/movies" ? handleButtonLikeClick : handleButtonRemoveClick}></button>
      </div>
      <p className="movie-card__subtitle">
        {!Math.trunc(movie.duration / 60)
          ? `${movie.duration}мин`
          : `${Math.trunc(movie.duration / 60)}ч ${movie.duration % (Math.trunc(movie.duration / 60) * 60)}м`}
      </p>
    </li>
  );
}

export default MoviesCard;
