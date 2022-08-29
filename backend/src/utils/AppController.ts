import { Model as ModelType } from "mongoose";
import { catchAsync } from "./../utils/catchAsync";
import { AppError } from "./../utils/AppError";
import { APIFeatures } from "./../utils/APIFeatures";
import { StatusCodes } from "http-status-codes";

export const deleteOne = <T>(Model: ModelType<T>) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.query.id);

    if (!doc) {
      return next(
        new AppError("No doc found with that ID", StatusCodes.NOT_FOUND)
      );
    }

    res.status(204).json({
      message: "success",
      data: null,
    });
  });

export const updateOne = <T>(Model: ModelType<T>) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(StatusCodes.OK).json({
      status: "success",
      data: { data: doc },
    });
  });

export const createOne = <T>(Model: ModelType<T>) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(StatusCodes.CREATED).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

export const getOne = <T>(
  Model: ModelType<T>,
  popOptions?: string | string[]
) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    // TODO fix this typing issue
    // @ts-ignore
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(
        new AppError("No doc found with that ID", StatusCodes.NOT_FOUND)
      );
    }

    res.status(StatusCodes.OK).json({
      status: "succes",
      data: { data: doc },
    });
  });

export const getAll = <T>(Model: ModelType<T>) =>
  catchAsync(async (req, res, next) => {
    // To allow nested GET reviews
    let filter = {};
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    //EXECUTE QUERY
    const doc = await features.query;

    res.status(StatusCodes.OK).json({
      status: "success",
      results: doc.length,
      data: { doc },
    });
  });
