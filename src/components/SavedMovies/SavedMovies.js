import React from "react";

import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MenuPopup from "../MenuPopup/MenuPopup";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesTemplate from "../../utils/constants";

function SavedMovies() {
  const [movies, setMovie] = React.useState([]);

  function generateCards() {
    for (let i = 0; i < Object.keys(moviesTemplate).length; i++) {
      if (moviesTemplate[i].isLiked) {
        setMovie((prevArray) => [...prevArray, moviesTemplate[i]]);
      }
    }
  }

  React.useEffect(() => {
    generateCards();
  }, []);

  return (
    <>
      <Header isLogged={true} />
      <SearchForm />
      <MoviesCardList loadMore={false} movies={movies} isSavedPage={true} />
      <MenuPopup />
      <div className="saved-movies__divider"></div>
      <Footer />
    </>
  );
}

export default SavedMovies;
