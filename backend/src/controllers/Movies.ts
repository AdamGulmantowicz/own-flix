import type { Request } from "express";
import { StatusCodes } from "http-status-codes";
import { pick } from "lodash";
import fetch from "node-fetch";
import Movie, { IMovie } from "../models/Movie";
import { API } from "../utils/api";
import { deleteOne, updateOne, getOne, getAll } from "../utils/AppController";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

export const createOne = catchAsync(async (req, res, next) => {
  const movieId = req.body.movieId;
  try {
    const res = await fetch(API.GET_MOVIE(movieId));
    const data = (await res.json()) as IMovie;

    console.log("----- movie fetched ------", data);
    // Movie.create({})
  } catch (error) {}
});

export const getAllMovies = getAll(Movie);
export const getMovie = getOne(Movie);
export const updateMovie = updateOne(Movie);
export const deleteMovie = deleteOne(Movie);
