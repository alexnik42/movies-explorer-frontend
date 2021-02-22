import React from "react";

import "./FilterCheckbox.css";
import isCheckedImage from "../../images/FilterCheckbox/filter-checkbox__checkbox_checked.svg";
import notCheckedImage from "../../images/FilterCheckbox/filter-checkbox__checkbox_not-checked.svg";

function FilterCheckbox({ isChecked }) {
  return (
    <div className="filter-checkbox">
      <div className="filter-checkbox__container">
        <img
          src={isChecked ? isCheckedImage : notCheckedImage}
          className="filter-checkbox__checkbox"
          alt="Короткометражки: статус"
        />
        <p className="filter-checkbox__text">Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;
