import { useState, useEffect, useCallback } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./App.css";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { ROUTES } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import MenuPopup from "../MenuPopup/MenuPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [currentSavedMovies, setCurrentSavedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");
  const [searchErrorMessage, setSearchErrorMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: null,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [serverError, setServerError] = useState("");
  const [menuOpened, setMenuOpened] = useState(false);

  const checkLocalStorage = useCallback(async () => {
    if (localStorage.getItem("movies")) {
      const localData = JSON.parse(localStorage.getItem("movies"));
      setAllMovies(localData);
    } else {
      try {
        const moviesData = await moviesApi.getMovies();
        const allMovies = moviesData.map((movie) => ({
          country: movie.country ? movie.country : "Не указано",
          director: movie.director ? movie.director : "Не указано",
          duration: movie.duration ? movie.duration : -1,
          year: movie.year ? movie.year : "Не указано",
          description: movie.description ? movie.description : "Не указано",
          image: movie.image
            ? `https://api.nomoreparties.co${movie.image.url}`
            : "",
          trailer: movie.trailerLink ? movie.trailerLink : "Не указано",
          thumbnail: movie.image
            ? `https://api.nomoreparties.co${movie.image.url}`
            : "",
          movieId: movie.id ? movie.id : 0,
          nameRU: movie.nameRU ? movie.nameRU : "Не указано",
          nameEN: movie.nameEN ? movie.nameEN : "Не указано",
        }));
        setAllMovies(allMovies);
        saveToLocalStorage(allMovies);
      } catch (err) {
        setSearchErrorMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      }
    }
  }, []);

  const getCurrentMovies = useCallback(
    async (movies, keyword, shortMovie) => {
      if (allMovies.length === 0) {
        setSearchStatus("search_error");
        return;
      }
      if (keyword.length === 0) {
        setSearchErrorMessage("Нужно ввести ключевое слово");
        setSearchStatus("search_error");
        return;
      }
      const currentMovies = movies.filter(
        (el) =>
          el.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
          ((shortMovie && el.duration <= 40) ||
            (!shortMovie && el.duration > 40))
      );
      setCurrentMovies(currentMovies);
      if (currentMovies.length > 0) {
        setSearchStatus("search_finished");
      } else {
        setSearchErrorMessage("Ничего не найдено");
        setSearchStatus("search_error");
      }
    },
    [allMovies]
  );

  const getSavedMovies = useCallback(async () => {
    try {
      const savedMovies = await mainApi.getSavedMovies(ROUTES.MOVIES);
      setSavedMovies(savedMovies);
      setCurrentSavedMovies(savedMovies);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const saveToLocalStorage = (movies) => {
    localStorage.setItem("movies", JSON.stringify(movies));
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem("movies");
  };

  const addToBookmarks = useCallback(
    async (movie) => {
      try {
        const newMovie = await mainApi.addToBookmark(ROUTES.MOVIES, movie);
        setSavedMovies([newMovie, ...savedMovies]);
        const updatedAllMovies = allMovies.map((el) =>
          el.movieId === newMovie.movieId ? newMovie : el
        );
        const updatedCurrentMovies = currentMovies.map((el) =>
          el.movieId === newMovie.movieId ? newMovie : el
        );
        setAllMovies(updatedAllMovies);
        localStorage.setItem("movies", JSON.stringify(updatedAllMovies));
        setCurrentMovies(updatedCurrentMovies);
      } catch (err) {
        console.log(err);
      }
    },
    [allMovies, currentMovies, savedMovies]
  );

  const removeFromBookmarks = useCallback(
    async (movie, type) => {
      try {
        const deletedMovie = await mainApi.removeFromBookmarks(
          ROUTES.MOVIES,
          movie
        );
        const updatedMovies = savedMovies.filter(
          (movie) => movie._id !== deletedMovie._id
        );
        setSavedMovies(updatedMovies);
        if (type === "saved-movies") {
          setCurrentMovies(updatedMovies);
          setCurrentSavedMovies(updatedMovies);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [savedMovies]
  );

  const handleCurrentUserInfoChange = ({ name, email }) => {
    mainApi
      .updateCurrentUserInfo(ROUTES.USER_INFO, name, email)
      .then((user) => {
        if (user) {
          setCurrentUser({
            name: user.name,
            email: user.email,
          });
          setServerError("Данные успешно изменены!");
        }
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  const menuPopupOpen = useCallback(() => {
    setMenuOpened(true);
  }, []);

  const menuPopupClose = useCallback(() => {
    setMenuOpened(false);
  }, []);

  const reset = useCallback(() => {
    removeFromLocalStorage();
    setCurrentMovies([]);
    setSavedMovies([]);
    setSearchStatus("");
    setSearchErrorMessage("");
    setServerError("");
  }, []);

  const resetErrorMessage = useCallback(() => {
    setSearchErrorMessage("");
    setServerError("");
  }, []);

  const handleCookieCheck = useCallback(async () => {
    try {
      const user = await mainApi.getCurrentUserInfo(ROUTES.USER_INFO);
      setCurrentUser({
        name: user.name,
        email: user.email,
        _id: user._id,
      });
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleLogin = ({ email, password }) => {
    mainApi
      .authorize(ROUTES.SIGNIN, email, password)
      .then((user) => {
        if (user._id) {
          handleCookieCheck();
        }
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  const handleRegistration = ({ name, email, password }) => {
    mainApi
      .register(ROUTES.SIGNUP, name, email, password)
      .then((user) => {
        if (user._id) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  const handleLogout = () => {
    mainApi
      .logout(ROUTES.LOGOUT)
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({
          name: "",
          email: "",
          _id: null,
        });
        localStorage.removeItem("loggedIn");
        reset();
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  useEffect(() => {
    checkLocalStorage();
    handleCookieCheck();
  }, [checkLocalStorage, handleCookieCheck]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          {menuOpened && (
            <MenuPopup
              loggedIn={loggedIn}
              menuPopupOpen={menuPopupOpen}
              menuPopupClose={menuPopupClose}
            />
          )}
          <Switch>
            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register
                  handleRegistration={handleRegistration}
                  serverError={serverError}
                  resetErrorMessage={resetErrorMessage}
                />
              )}
            </Route>
            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login
                  handleLogin={handleLogin}
                  serverError={serverError}
                  resetErrorMessage={resetErrorMessage}
                />
              )}
            </Route>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              moviesData={allMovies}
              currentMovies={currentMovies}
              savedMovies={savedMovies}
              getMovies={getCurrentMovies}
              searchStatus={searchStatus}
              setSearchStatus={setSearchStatus}
              searchErrorMessage={searchErrorMessage}
              setCurrentMovies={setCurrentMovies}
              addToBookmarks={addToBookmarks}
              removeFromBookmarks={removeFromBookmarks}
              menuPopupOpen={menuPopupOpen}
              menuPopupClose={menuPopupClose}
            />
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              moviesData={savedMovies}
              currentMovies={currentMovies}
              currentSavedMovies={currentSavedMovies}
              savedMovies={savedMovies}
              getSavedMovies={getSavedMovies}
              getMovies={getCurrentMovies}
              searchStatus={searchStatus}
              setSearchStatus={setSearchStatus}
              searchErrorMessage={searchErrorMessage}
              setCurrentMovies={setCurrentMovies}
              addToBookmarks={addToBookmarks}
              removeFromBookmarks={removeFromBookmarks}
              menuPopupOpen={menuPopupOpen}
              menuPopupClose={menuPopupClose}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              searchStatus={"search_finished"}
              handleCurrentUserInfoChange={handleCurrentUserInfoChange}
              handleLogout={handleLogout}
              currentUser={currentUser}
              serverError={serverError}
              menuPopupOpen={menuPopupOpen}
              menuPopupClose={menuPopupClose}
            />
            <Route exact path="/">
              <Main
                loggedIn={loggedIn}
                menuPopupOpen={menuPopupOpen}
                menuPopupClose={menuPopupClose}
              />
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
