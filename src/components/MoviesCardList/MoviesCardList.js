import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ loadMore, movies, isSavedPage }) {
  return (
    <div className="movies-cardlist">
      <ul className="movies-cardlist__container">
        {movies.map((movie, idx) => (
          <MoviesCard key={idx} movie={movie} isSavedPage={isSavedPage} />
        ))}
      </ul>
      {loadMore && (
        <div className="movies-cardlist__more-section">
          <button className="movies-cardlist__more-section-button">Ещё</button>
        </div>
      )}
    </div>
  );
}

export default MoviesCardList;
