import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import type { RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { omit } from "lodash";

const signToken = (id: string) => {
  if (!process.env.JWT_SECRET) throw Error("Please specify JWT Secret!");

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAndSendToken = (
  user: IUser,
  statusCode: StatusCodes,
  res: Response
) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const signUp: RequestHandler = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  createAndSendToken(newUser, StatusCodes.CREATED, res);
};

export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;
  // 1) Check if email and password exist
  if (!email || !password) {
    next(new Error("Please provide email and password!"));
  }
  // 2) Check if user exist && password is correct
  const user = await User.findOne({ email }).select("+password");
  // TODO fix that in future
  const userWithoutPassword = await User.findOne({ email });

  if (
    !user ||
    !(await user.isValidPassword(password)) ||
    !userWithoutPassword
  ) {
    return next(new Error("Incorrect email or password"));
  }

  createAndSendToken(userWithoutPassword, StatusCodes.OK, res);
};
