const StatusCodes = require("http-status-codes");

const validateCreateCity = async (req, res, next) => {
    if(!req.body.name) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for creating the city",
            explaination: "Missing madatory properties to create a city"
        });
    }
    next();
}

const validateUpdateCity = async (req, res, next) => {
    if(!req.body.name) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for updating the city",
            explaination: "Missing madatory properties to update a city"
        });
    }
    next();
}

module.exports = {
    validateCreateCity,
    validateUpdateCity
}