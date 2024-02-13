const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
    constructor(
        name = "AppError",
        message = "Something went wrong please try again later",
        explaination = "Some internal error occured",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super();
        this.name = name;
        this.message = message;
        this.explaination = explaination;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;