import type { Request } from "express";
import { StatusCodes } from "http-status-codes";
import { pick } from "lodash";
import User, { IUser } from "../models/User";
import { deleteOne, updateOne, getOne, getAll } from "../utils/AppController";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

export const updateMe = catchAsync(async (req: Request, res, next) => {
  // 1) Create error if user POSTs password data
  const user = req.user as IUser;

  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updatePassword",
        400
      )
    );
  }

  // 2) Filter out not wanted properties from body
  const filteredBody = pick(req.body, "name", "email");

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

export const getAllUsers = getAll(User);
export const getUser = getOne(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
