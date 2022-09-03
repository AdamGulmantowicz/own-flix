import mongoose, { Document, Schema, ObjectId } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

export interface IGenre extends Document {
  _id: ObjectId;
  name: string;
}

const GenreSchema = new mongoose.Schema<IGenre>({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Genre = mongoose.model<IGenre>("Genre", GenreSchema);
export const TVGenre = mongoose.model<IGenre>("TVGenre", GenreSchema);

export default Genre;
