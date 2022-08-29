import path from "path";
import morgan from "morgan";
import express, { application } from "express";
import RateLimit from "express-rate-limit";
import ExpressMongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import passport from "passport";
import dotenv from "dotenv";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import User from "./models/User";
import AuthRouter from "./routes/AuthRouter";
import MovieRouter from "./routes/MovieRouter";
import { Strategy as LocalStrategy } from "passport-local";

const app = express();

// Some basic configurations(setting static files path, rate limiter, cookie parser)

dotenv.config();

app.use(express.static(path.join(__dirname, "public")));

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = RateLimit({
  max: 100,
  windowMs: 60 * 60 * 100,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

app.use(ExpressMongoSanitize());

app.use(compression());

// TODO move it to async/await and add global error handlers and messages
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    // @ts-ignore
    function (email: string, password: string, cb) {
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
      return User.findOne({ email })
        .exec()
        .then((user) => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          return cb(null, user, { message: "Logged In Successfully" });
        })
        .catch((err) => cb(err));
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, cb) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return User.findById(jwtPayload.id)
        .exec()
        .then((user) => {
          return cb(null, user);
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);

app.use("/", AuthRouter);
app.use("/movie", MovieRouter);

app.use("*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

export default app;
