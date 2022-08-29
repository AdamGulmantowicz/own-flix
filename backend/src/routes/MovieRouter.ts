import { Router } from "express";
import passport from "passport";
import { createOne } from "../controllers/Movies";

const MovieRouter = Router();

MovieRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createOne
);

export default MovieRouter;
