import { useEffect } from "react";

import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
  loggedIn,
  moviesData,
  currentMovies,
  currentSavedMovies,
  savedMovies,
  getSavedMovies,
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
  useEffect(() => {
    getSavedMovies();
  }, [getSavedMovies]);

  console.log(savedMovies);


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
      {(searchStatus === "search_finished" || searchStatus === "") && (
        <MoviesCardList
          movies={
            currentMovies.length === 0 ? savedMovies : currentMovies
          }
          savedMovies={savedMovies}
          addToBookmarks={addToBookmarks}
          removeFromBookmarks={removeFromBookmarks}
          type="saved-movies"
        />
      )}
      <div className="saved-movies__divider"></div>
      <Footer />
    </>
  );
}

export default SavedMovies;
