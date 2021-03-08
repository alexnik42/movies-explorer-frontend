import { useState, useCallback, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { setInitialSize, setIncrementSize } from "../../utils/moviesRender";

function MoviesCardList({
  movies,
  savedMovies,
  addToBookmarks,
  removeFromBookmarks,
  type,
}) {
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [counter, setCounter] = useState(setInitialSize());
  const [increment, setIncrement] = useState(setIncrementSize());

  const debounce = useCallback((fn, ms) => {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }, []);

  const handleMoreFilms = () => {
    setCounter(counter + increment);
  };

  useEffect(() => {
    setMoviesToShow(movies.slice(0, counter));
  }, [counter, movies]);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setCounter(setInitialSize());
      setIncrement(setIncrementSize());
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [debounce]);

  return (
    <div className="movies-cardlist">
      <ul className="movies-cardlist__container">
        {(type === "all-movies" ? moviesToShow : movies).map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            savedMovies={savedMovies}
            addToBookmarks={addToBookmarks}
            removeFromBookmarks={removeFromBookmarks}
            type={type}
          />
        ))}
      </ul>
      {type === "all-movies" && counter < movies.length && (
        <div className="movies-cardlist__more-section">
          <button
            className="movies-cardlist__more-section-button"
            onClick={handleMoreFilms}
          >
            Ещё
          </button>
        </div>
      )}
    </div>
  );
}

export default MoviesCardList;
