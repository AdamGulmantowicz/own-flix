const BASE_PATH = "https://api.themoviedb.org/3/";

const API_KEY = process.env.MOVIE_DB_KEY;

const urlFactory = (url = "") => `${BASE_PATH}${url}?api_key=${API_KEY}`;

export const API = {
  GET_MOVIE: (id: string) => {
    return urlFactory(`movie/${id}`);
  },
  GET_MOVIE_IMAGES: (id: string) => {
    return urlFactory(`movie/${id}/images`);
  },
  GET_MOVIE_GENRES: () => {
    return urlFactory(`genre/movie/list`);
  },
  GET_TV_GENRES: () => {
    return urlFactory(`genre/tv/list`);
  },
};
