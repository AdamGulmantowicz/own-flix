import { StatusCodes } from "http-status-codes";

export enum EErrorStatus {
  FAIL = "fail",
  ERROR = "error",
}

export class AppError extends Error {
  statusCode: StatusCodes;
  status: EErrorStatus;
  isOperational: boolean;

  constructor(message: string, statusCode: StatusCodes) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4")
      ? EErrorStatus.FAIL
      : EErrorStatus.FAIL;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
