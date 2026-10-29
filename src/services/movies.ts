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

  let data;

  try {
    const response = await axios.get(url, { timeout: 10000 });
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new MovieError(MOVIE_MESSAGES.EXTERNAL_API_ERROR, STATUS_CODE.BAD_GATEWAY);
    }

    throw error;
  }

  if (!data || !Array.isArray(data.filmes)) {
    throw new MovieError(MOVIE_MESSAGES.INVALID_API_RESPONSE, STATUS_CODE.BAD_GATEWAY);
  }

  return data.filmes.map((movie: Movie) => parseMovie(movie));
};
