const MOVIE_API_URL = "https://api.nomoreparties.co/beatfilm-movies";
const MAIN_API_URL = "http://localhost:3000"
  
//"https://api.movies-explorer.alexnik42.students.nomoredomains.monster";

const API_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const API_CREDENTIALS = "include";

const ROUTES = {
  MOVIES: "movies",
  SIGNUP: "signup",
  SIGNIN: "signin",
  LOGOUT: "signout",
  USER_INFO: "users/me",
};

export { MOVIE_API_URL, MAIN_API_URL, API_HEADERS, API_CREDENTIALS, ROUTES };
