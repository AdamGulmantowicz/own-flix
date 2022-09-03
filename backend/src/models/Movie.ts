import mongoose, { Document, Schema, ObjectId } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

interface IGenre {
  _id: ObjectId;
  name: string;
}

interface ISubtitle {
  url: string;
  language: string;
}

export interface IMovieImage {
  aspect_ratio: number;
  file_path: string;
  height: number;
  width: number;
}

export interface IMovieImages {
  backdrops: IMovieImage[];
  posters: IMovieImage[];
}

export interface IMovie extends Document {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: IGenre[];
  _id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  subtitles?: ISubtitle[];
  videoUrl?: string;
  images: IMovieImages;
}

const MovieSchema = new mongoose.Schema<IMovie>({
  adult: {
    type: Boolean,
    default: false,
  },
  backdrop_path: String,
  budget: Number,
  genres: [{ _id: { type: Number, ref: "Genre" }, name: String }],
  _id: {
    type: Number,
    required: [true, "Movie Id must be specified."],
  },
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  revenue: Number,
  runtime: Number,
  tagline: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
  videoUrl: String,
  subtitles: {
    type: Array,
    default: [],
  },
  images: {
    posters: [
      {
        aspect_ratio: Number,
        file_path: String,
        height: Number,
        width: Number,
      },
    ],
    backdrops: [
      {
        aspect_ratio: Number,
        file_path: String,
        height: Number,
        width: Number,
      },
    ],
  },
});

const Movie = mongoose.model<IMovie>("Movie", MovieSchema);

export default Movie;
