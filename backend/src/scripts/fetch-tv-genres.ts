import { API } from "../utils/api";
import mongoose from "mongoose";
import fetch from "node-fetch";
import { TVGenre } from "../models/Genre";
import { mapKeys } from "lodash";

const { MONGO_DB_USER, MONGO_DB_URL, MONGO_DB_PASSWORD } = process.env;

const keyMap: Record<string, string> = {
  id: "_id",
};

// Connect with database
if (!MONGO_DB_PASSWORD || !MONGO_DB_URL || !MONGO_DB_USER)
  throw Error("Please specify env vars for db connection");

const DB = MONGO_DB_URL.replace("<password>", MONGO_DB_PASSWORD).replace(
  "<username>",
  MONGO_DB_USER
);

mongoose.connect(DB, async () => {
  console.log("Connected to the database.");

  await TVGenre.remove({});

  const data = await (await fetch(API.GET_TV_GENRES())).json();
  const genres = data.genres.map((genre) =>
    mapKeys(genre, (value, key) => {
      if (keyMap[key]) return keyMap[key];

      return key;
    })
  );

  console.log(genres);

  await TVGenre.insertMany(genres);

  console.log("Data included successfully");
});
