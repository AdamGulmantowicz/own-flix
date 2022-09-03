import { Router } from "express";
import passport from "passport";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovie,
  updateMovie,
} from "../controllers/Movies";

const MovieRouter = Router();

MovieRouter.get("/", getAllMovies);
MovieRouter.get("/:id", getMovie);
MovieRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createMovie
);
MovieRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateMovie
);
MovieRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteMovie
);

export default MovieRouter;
