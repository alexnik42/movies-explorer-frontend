import "./SearchForm.css";
import searchLogo from "../../images/SearchForm/search-form__logo.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <img
          className="search-form__logo"
          src={searchLogo}
          alt="Иконка поиска"
        ></img>
        <form className="search-form__form" method="POST">
          <fieldset className="search-form__set">
            <label className="search-form__field">
              <input
                className="search-form__input"
                id="search-form-input"
                placeholder="Фильм"
                name="filmName"
                required
              />
              <span
                className="search-form__input-error"
                id="search-form__input-error"
              ></span>
            </label>
          </fieldset>
        </form>
        <button
          className="search-form__submit"
          type="submit"
          aria-label="Найти фильм"
        >
          Найти
        </button>
      </div>
      <FilterCheckbox isChecked={true} />
    </div>
  );
}

export default SearchForm;
