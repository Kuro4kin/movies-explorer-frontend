import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css"

function MoviesCardList({ dataMovies, user }) {
  const location = useLocation();
  return(
    <section className="section-movie">
      <ul className="section-movie__card-list">
        { dataMovies.map((movie, i) => {
          return <MoviesCard movie={movie} user={user} key={i} />
        })}
      </ul>
      {location.pathname === "/movies" && <button aria-label="Add" className="section-movie__button" type="button">Ещё</button>}
    </section>
  )
}

export default MoviesCardList;