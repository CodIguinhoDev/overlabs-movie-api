import type { Request, Response } from "express";

import { MovieError } from "../errors/MovieError.js";
import { MOVIE_MESSAGES } from "../constants/messages.js";
import { STATUS_CODE } from "../constants/statusCode.js";
import { showMovies } from "../services/movies.js";

export const getMovies = async (_: Request, res: Response): Promise<void> => {
  try {
    const response = await showMovies();
    res.status(STATUS_CODE.OK).json(response);
  } catch (error) {
    if (error instanceof MovieError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: MOVIE_MESSAGES.INTERNAL_ERROR });
    }
  }
};
