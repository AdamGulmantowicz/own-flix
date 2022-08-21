import app from "./app";
import mongoose from "mongoose";
import path from "path";

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log(err);
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  process.exit(1);
});

const { MONGO_DB_USER, MONGO_DB_URL, MONGO_DB_PASSWORD } = process.env;

// Connect with database
if (!MONGO_DB_PASSWORD || !MONGO_DB_URL || !MONGO_DB_USER)
  throw Error("Please specify env vars for db connection");

const DB = MONGO_DB_URL.replace("<password>", MONGO_DB_PASSWORD).replace(
  "<username>",
  MONGO_DB_USER
);

mongoose.connect(DB, () => {
  console.log("Connected to the database.");
});

// Start listening to app
const port = process.env.API_PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

app.use("*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

process.on("unhandledRejection", (err: Error) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
