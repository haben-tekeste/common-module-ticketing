import CustomError from "./CustomError";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor() {
    super();

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors() {
    return [{ message: "You are not authorized" }];
  }
}
