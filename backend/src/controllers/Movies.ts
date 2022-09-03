import type { Request } from "express";
import { StatusCodes } from "http-status-codes";
import { mapKeys, maxBy, minBy, omit, pick } from "lodash";
import fetch from "node-fetch";
import Movie, { IMovie, IMovieImage, IMovieImages } from "../models/Movie";
import { API } from "../utils/api";
import { deleteOne, updateOne, getOne, getAll } from "../utils/AppController";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

const allowedMovieKeys = [
  "adult",
  "backdrop_path",
  "budget",
  "genres",
  "id",
  "original_language",
  "original_title",
  "overview",
  "popularity",
  "poster_path",
  "release_date",
  "revenue",
  "runtime",
  "tagline",
  "title",
  "video",
  "vote_average",
  "vote_count",
];

const allowedMovieImageKeys = ["aspect_ratio", "file_path", "height", "width"];

const keyMap: Record<string, string> = {
  id: "_id",
};

const mapMovieKeys = (value: string, key: string) => {
  if (keyMap[key]) return keyMap[key];

  return key;
};

const transformMovieDataToDoc = (
  movie: IMovie,
  { backdrops, posters }: IMovieImages
): IMovie => {
  const data = mapKeys(
    pick(movie, ...allowedMovieKeys),
    mapMovieKeys
  ) as IMovie;

  const finalImages = {
    backdrops: [
      maxBy(backdrops, (i) => i.width),
      minBy(backdrops, (i) => i.width),
      backdrops.find((item) => item.width === 1920 && item.height === 1080),
    ]
      .filter(Boolean)
      .map((i) => pick(i, ...allowedMovieImageKeys)),
    posters: [
      maxBy(posters, (i) => i.width),
      minBy(posters, (i) => i.width),
      posters.find((item) => item.width === 1920 && item.height === 1080),
    ]
      .filter(Boolean)
      .map((i) => pick(i, ...allowedMovieImageKeys)),
  } as IMovieImages;

  return {
    ...data,
    // @ts-ignore
    genres: data.genres.map((i) => mapKeys(i, mapMovieKeys)),
    images: finalImages,
  } as unknown as IMovie;
};

export const createMovie = catchAsync(async (req, res, next) => {
  const movieId = req.body.movieId;
  const videoUrl = req.body.videoUrl;
  const subtitles = req.body.subtitles;
  await Movie.remove({});
  try {
    const url = API.GET_MOVIE(movieId);
    const data = await (await fetch(url)).json();

    const images = await (await fetch(API.GET_MOVIE_IMAGES(movieId))).json();

    const preparedData = transformMovieDataToDoc(data, images);

    const movie = await Movie.create({
      ...preparedData,
      videoUrl,
      subtitles,
    });

    // Napisz error handlery
    // Zrób protekcję route'ów
    // Dodaj brakujące properties do Usera i Movie
    // Dodaj możliwość dodawania seriali i odcinków
    // Zrób skrypt do tworzenia admin usera
    // Zrób mechanizm backupów
    // Zrób skrypt do wgrywania wszystkich filmów
    res.status(StatusCodes.CREATED).json({ data: movie });
  } catch (error) {
    console.log(error);

    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Something went wrong with movie creation." });
  }
});

export const getAllMovies = getAll(Movie);
export const getMovie = getOne(Movie);
export const updateMovie = updateOne(Movie);
export const deleteMovie = deleteOne(Movie);
