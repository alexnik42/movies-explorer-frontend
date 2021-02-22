import React from "react";
import "./MoviesCard.css";
import movieIsLiked from "../../images/MovieCard/movies-card__movie-bookmark_liked.svg";
import movieNotLiked from "../../images/MovieCard/movies-card__movie-bookmark_disliked.svg";
import movieDeleteBookmark from "../../images/MovieCard/movies-card__movie-bookmark-delete.svg";

function MoviesCard({ movie, isSavedPage }) {
  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__header">
          <div className="movies-card__movie-info">
            <h3 className="movies-card__movie-name">{movie.name}</h3>
            <p className="movies-card__movie-duration">{movie.duration}</p>
          </div>
          {isSavedPage ? (
            <img
              src={movieDeleteBookmark}
              className="movies-card__movie-bookmark-delete"
              alt="Удалить из закладок"
            />
          ) : (
            <img
              src={movie.isLiked ? movieIsLiked : movieNotLiked}
              className="movies-card__movie-bookmark"
              alt="Закладка"
            />
          )}
        </div>
        <img
          src={movie.image}
          className="movies-card__movie-image"
          alt="Постер фильма"
        ></img>
      </div>
    </li>
  );
}

export default MoviesCard;
