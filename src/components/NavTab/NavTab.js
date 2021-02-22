import "./NavTab.css";

function NavTab() {
  return (
    <ul className="navtab__container">
      <li className="navtab__box">
        <a className="navtab__link" href="#about-project">
          О проекте
        </a>
      </li>
      <li className="navtab__box">
        <a className="navtab__link" href="#techs">
          О Технологии
        </a>
      </li>
      <li className="navtab__box">
        <a className="navtab__link" href="#about-me">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
