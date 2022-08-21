import { login, signUp } from "../controllers/Auth";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/signup", signUp);
AuthRouter.post("/login", login);

export default AuthRouter;
