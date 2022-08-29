import { getMe, login, signUp } from "../controllers/Auth";
import { Router } from "express";
import passport from "passport";

const AuthRouter = Router();

AuthRouter.post("/signup", signUp);
AuthRouter.post("/login", login);
AuthRouter.get("/me", passport.authenticate("jwt", { session: false }), getMe);

export default AuthRouter;
