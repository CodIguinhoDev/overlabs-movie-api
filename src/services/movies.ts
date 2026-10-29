import type { MovieAnalyzed, Movie } from "../types/movie.js";

import { MovieError } from "../errors/MovieError.js";
import { MOVIE_MESSAGES } from "../constants/messages.js";
import { STATUS_CODE } from "../constants/statusCode.js";
import { parseMovie } from "../utils/movies.js";
import axios from "axios";

export const showMovies = async (): Promise<MovieAnalyzed[]> => {
  const url = process.env.URL_MOVIES;

  if (!url) {
    throw new MovieError(MOVIE_MESSAGES.URL_NOT_FOUND, STATUS_CODE.NOT_FOUND);
  }

  const { data } = await axios.get(url);

  return data.filmes.map((movie: Movie) => parseMovie(movie));
};
