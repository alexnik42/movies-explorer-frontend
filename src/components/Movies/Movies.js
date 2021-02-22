import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MenuPopup from "../MenuPopup/MenuPopup";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import moviesTemplate from "../../utils/constants";

function Movies({ isLoading }) {
  const [movies, setMovie] = React.useState([]);

  function generateCards() {
    for (let i = 0; i < Object.keys(moviesTemplate).length; i++) {
      setMovie((prevArray) => [...prevArray, moviesTemplate[i]]);
    }
  }

  React.useEffect(() => {
    generateCards();
  }, []);

  return (
    <>
      <Header isLogged={true} />
      <SearchForm />
      {isLoading ? <Preloader /> : null}
      <MoviesCardList loadMore={true} movies={movies} isSavedPage={false} />
      <MenuPopup />
      <Footer />
    </>
  );
}

export default Movies;
