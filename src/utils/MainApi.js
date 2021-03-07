import { MAIN_API_URL, API_HEADERS, API_CREDENTIALS } from "./constants";

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  async _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    const errorMessage = await res.json();
    return Promise.reject(new Error(`Ошибка: ${errorMessage.message}`));
  }

  async getSavedMovies(route) {
    const res = await fetch(`${this._baseUrl}/${route}`, {
      method: "GET",
      headers: this._headers,
      credentials: this._credentials,
    });
    return this._getResponseData(res);
  }

  async addToBookmark(route, movie) {
    return fetch(`${this._baseUrl}/${route}`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  async removeFromBookmarks(route, movie) {
    return fetch(`${this._baseUrl}/${route}/${movie._id}`, {
      method: "delete",
      headers: this._headers,
      credentials: this._credentials,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  async getCurrentUserInfo(route) {
    const res = await fetch(`${this._baseUrl}/${route}`, {
      method: "GET",
      headers: this._headers,
      credentials: this._credentials,
    });
    return this._getResponseData(res);
  }

  async updateCurrentUserInfo(route, name, email) {
    const res = await fetch(`${this._baseUrl}/${route}`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
    return this._getResponseData(res);
  }

  async register(route, name, email, password) {
    const res = await fetch(`${this._baseUrl}/${route}`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    return this._getResponseData(res);
  }

  async authorize(route, email, password) {
    const res = await fetch(`${this._baseUrl}/${route}`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return this._getResponseData(res);
  }

  async logout(route) {
    const res = await fetch(`${this._baseUrl}/${route}`, {
      method: "GET",
      headers: this._headers,
      credentials: this._credentials,
    });
    return this._getResponseData(res);
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: API_HEADERS,
  credentials: API_CREDENTIALS,
});

export default mainApi;
