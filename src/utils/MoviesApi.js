import { MOVIE_API_URL, API_HEADERS, API_CREDENTIALS } from "./constants";

class MoviesApi {
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

  async getMovies() {
    const res = await fetch(this._baseUrl);
    return this._getResponseData(res);
  }
}

const movieApi = new MoviesApi({
  baseUrl: MOVIE_API_URL,
  headers: API_HEADERS,
  credentials: API_CREDENTIALS,
});

export default movieApi;
