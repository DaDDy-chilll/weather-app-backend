const { StatusCodes } = require("http-status-codes");

class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

class NotFound extends CustomError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.NOT_FOUND;
  }
}

class BadRequest extends CustomError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = {
  NotFound,
  BadRequest,
};
