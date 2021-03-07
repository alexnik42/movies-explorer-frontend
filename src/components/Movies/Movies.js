import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
  loggedIn,
  moviesData,
  currentMovies,
  savedMovies,
  getMovies,
  searchStatus,
  setSearchStatus,
  searchErrorMessage,
  setCurrentMovies,
  addToBookmarks,
  removeFromBookmarks,
  menuPopupOpen,
  menuPopupClose,
}) {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        menuPopupOpen={menuPopupOpen}
        menuPopupClose={menuPopupClose}
      />
      <SearchForm
        moviesData={moviesData}
        getMovies={getMovies}
        setSearchStatus={setSearchStatus}
        setCurrentMovies={setCurrentMovies}
      />
      {searchStatus === "search_searching" && <Preloader />}
      {searchStatus === "search_error" && (
        <SearchError searchErrorMessage={searchErrorMessage} />
      )}
      {searchStatus === "search_finished" && (
        <MoviesCardList
          movies={currentMovies}
          savedMovies={savedMovies}
          addToBookmarks={addToBookmarks}
          removeFromBookmarks={removeFromBookmarks}
          type="all-movies"
        />
      )}
      <Footer />
    </>
  );
}

export default Movies;
