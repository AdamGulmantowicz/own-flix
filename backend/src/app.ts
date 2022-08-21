import path from "path";
import morgan from "morgan";
import express, { application } from "express";
import RateLimit from "express-rate-limit";
import ExpressMongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import User from "./models/User";
import AuthRouter from "./routes/AuthRouter";

const app = express();

// Some basic configurations(setting static files path, rate limiter, cookie parser)

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async function (jwt_payload, done) {
      if (!jwt_payload || !jwt_payload.sub)
        return done(Error("There is no such user"), false);

      const user = await User.findOne({ _id: jwt_payload.sub }).exec();
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    }
  )
);

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

app.use("/", AuthRouter);

app.use("*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

export default app;
