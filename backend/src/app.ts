import path from "path";
import morgan from "morgan";
import express, { application } from "express";
import RateLimit from "express-rate-limit";
import ExpressMongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

const app = express();

// Some basic configurations(setting static files path, rate limiter, cookie parser)

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

export default app;
