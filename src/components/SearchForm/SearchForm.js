import { useState, useCallback, useEffect } from "react";

import "./SearchForm.css";
import searchLogo from "../../images/SearchForm/search-form__logo.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  moviesData,
  getMovies,
  setSearchStatus,
  setCurrentMovies,
}) {
  const [keyword, setKeyword] = useState("");
  const [shortMovie, setShortMovie] = useState(true);
  const [isSearched, setIsSearched] = useState(false);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleShortMovieChange = useCallback(
    (e) => {
      setShortMovie(!shortMovie);
    },
    [shortMovie]
  );

  const handleMovieSearch = useCallback(
    (e) => {
      if (e) {
        e.preventDefault();
      }
      setSearchStatus("search_searching");
      setTimeout(() => {
        getMovies(moviesData, keyword, shortMovie);
      }, 500);
    },
    [getMovies, setSearchStatus, moviesData, keyword, shortMovie]
  );

  useEffect(() => {
    if (isSearched) {
      handleMovieSearch();
    }
  }, [shortMovie]);

  useEffect(() => {
    setIsSearched(true);
    setSearchStatus("");
    setCurrentMovies([]);
  }, [setSearchStatus, setCurrentMovies]);

  return (
    <div className="search-form">
      <div className="search-form__container">
        <img
          className="search-form__logo"
          src={searchLogo}
          alt="Иконка поиска"
        ></img>
        <form
          className="search-form__form"
          method="POST"
          name="searchMovie"
          onSubmit={handleMovieSearch}
          noValidate
        >
          <fieldset className="search-form__set">
            <label className="search-form__field">
              <input
                className="search-form__input"
                id="search-form-input"
                placeholder="Фильм"
                name="filmName"
                onChange={handleKeywordChange}
                required
              />
              <span
                className="search-form__input-error"
                id="search-form__input-error"
              ></span>
            </label>
          </fieldset>
          <button
            className="search-form__submit"
            type="submit"
            aria-label="Найти фильм"
          >
            Найти
          </button>
        </form>
      </div>
      <FilterCheckbox
        shortMovie={shortMovie}
        handleShortMovieChange={handleShortMovieChange}
      />
    </div>
  );
}

export default SearchForm;
