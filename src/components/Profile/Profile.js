import "./Profile.css";

import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header isLogged={true} />
      <div className="profile">
        <div className="profile__container">
          <h2 className="profile__greeting">Привет, Виталий!</h2>
          <div className="profile__info">
            <div className="profile__info-container">
              <p className="profile__info-label">Имя</p>
              <p className="profile__info-data">Виталий</p>
            </div>
            <div className="profile__info-container">
              <p className="profile__info-label">Почта</p>
              <p className="profile__info-data">pochta@yandex.ru</p>
            </div>
          </div>
          <ul className="profile__links">
            <li className="profile__link">
              <a className="profile__link-edit" href="./profile">
                Редактировать
              </a>
            </li>
            <li className="profile__link">
              <a className="profile__link-logout" href="./">
                Выйти из аккаунта
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
