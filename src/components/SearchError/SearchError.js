import React from "react";
import "./SearchError.css";

const SearchError = ({ searchErrorMessage }) => {
  return (
    <div className="search-error">
      <div className="search-error__container">
        <p className="search-error__title">{searchErrorMessage}</p>
      </div>
    </div>
  );
};

export default SearchError;
