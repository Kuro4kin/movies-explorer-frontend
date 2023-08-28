import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  const location = useLocation();

  function handleSaveMovies(data) {
    props.handleSaveMovie(data);
  }

  function handleRemoveSavedMovie(movieId) {
    props.handleRemoveSavedMovie(movieId);
  }

  return (
    <section className="section-movie">
      <ul
        className={
          location.pathname === "/movies"
            ? "section-movie__card-list"
            : "section-movie__card-list section-movie__card-list_saved-movies"
        }>
        {location.pathname === "/movies" &&
          props.dataMovies &&
          props.dataMovies.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                userMovies={props.userMovies}
                handleSaveMovies={handleSaveMovies}
                handleRemoveSavedMovie={handleRemoveSavedMovie}
                key={movie.id}
              />
            );
          })}
        {(location.pathname === "/saved-movies") &&
          props.dataMovies.map((movie) => {
            return <MoviesCard movie={movie} handleRemoveSavedMovie={handleRemoveSavedMovie} key={movie._id} />;
          })}
      </ul>
      {location.pathname === "/movies" && props.stateButtonAdd && (
        <button aria-label="Add" className="section-movie__button" type="button" onClick={props.showMoreMovies}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
