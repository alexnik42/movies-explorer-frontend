import "./MoviesCard.css";
import movieIsLiked from "../../images/MovieCard/movies-card__movie-bookmark_liked.svg";
import movieNotLiked from "../../images/MovieCard/movies-card__movie-bookmark_disliked.svg";
import movieDeleteBookmark from "../../images/MovieCard/movies-card__movie-bookmark-delete.svg";

function MoviesCard({
  movie,
  savedMovies,
  addToBookmarks,
  removeFromBookmarks,
  type,
}) {
  const handleAddToBookmarks = () => {
    addToBookmarks(movie, type);
  };

  const handleRemoveFromBookmarks = () => {
    removeFromBookmarks(movie, type);
  };

  const parseDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - 60 * hours;
    return `${hours}ч ${minutes} м`;
  };

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__header">
          <div className="movies-card__movie-info">
            <h3 className="movies-card__movie-name">{movie.nameRU}</h3>
            <p className="movies-card__movie-duration">
              {parseDuration(movie.duration)}
            </p>
          </div>
          {type === "saved-movies" ? (
            <img
              src={movieDeleteBookmark}
              className="movies-card__movie-bookmark-delete"
              alt="Удалить из закладок"
              onClick={handleRemoveFromBookmarks}
            />
          ) : savedMovies.some(
              (savedMovie) => savedMovie.movieId === movie.movieId
            ) ? (
            <img
              src={movieIsLiked}
              className="movies-card__movie-bookmark"
              alt="Закладка"
              onClick={handleRemoveFromBookmarks}
            />
          ) : (
            <img
              src={movieNotLiked}
              className="movies-card__movie-bookmark"
              alt="Закладка"
              onClick={handleAddToBookmarks}
            />
          )}
        </div>
        <a
          href={movie.trailer}
          className="movies-card__movie-trailer-link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={movie.image}
            className="movies-card__movie-image"
            alt="Постер фильма"
          ></img>
        </a>
      </div>
    </li>
  );
}

export default MoviesCard;
