import { NextFunction, Request, RequestHandler, Response } from "express";

type HandlerFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

type TCatchAsync = (fn: HandlerFn) => RequestHandler;

export const catchAsync: TCatchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
