import "./FilterCheckbox.css";
import isCheckedImage from "../../images/FilterCheckbox/filter-checkbox__checkbox_checked.svg";
import notCheckedImage from "../../images/FilterCheckbox/filter-checkbox__checkbox_not-checked.svg";

function FilterCheckbox({ shortMovie, handleShortMovieChange }) {
  const handleCheckboxClick = () => {
    handleShortMovieChange();
  };

  return (
    <div className="filter-checkbox" onClick={handleCheckboxClick}>
      <div className="filter-checkbox__container">
        <img
          src={shortMovie ? isCheckedImage : notCheckedImage}
          className="filter-checkbox__checkbox"
          alt="Короткометражки: статус"
        />
        <p className="filter-checkbox__text">Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;
