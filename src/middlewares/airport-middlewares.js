const StatusCodes = require("http-status-codes");

const validateCreateAirport = async (req, res, next) => {
    if(
        !req.body.name ||
        !req.body.address ||
        !req.body.cityId
    ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for creating the airport",
            explaination: "Missing madatory properties to create a airport"
        });
    }
    next();
}

const validateUpdateAirport = async (req, res, next) => {
    if(!req.body.name) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for updating the airport",
            explaination: "Missing madatory properties to update a airport"
        });
    }
    next();
}

module.exports = {
    validateCreateAirport,
    validateUpdateAirport
}