import mongoose, { Document } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  photo?: string;
  isAdmin: boolean;
  password: string;
  passwordConfirm: string;
  active: boolean;
  isValidPassword: (password: string) => boolean;
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please type a valid email!"],
  },
  photo: { type: String, default: "default.jpg" },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
    validate: {
      // Works only with SAVE method!!!!
      validator: function (el: string): boolean {
        // TODO remove this as typing later
        return el === (this as unknown as IUser).password;
      },
      message: "Passwords should match!",
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  this.passwordConfirm = "";
  next();
});

userSchema.methods.isValidPassword = async function (password: string) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
