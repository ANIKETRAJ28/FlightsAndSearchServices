const StatusCodes = require("http-status-codes");

const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for creating the flights",
            explaination: "Missing madatory properties to create a flight"
        });
    }
    next();
}

const validateUpdateFlight = (req, res, next) => {
    if(!req.body.price) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for updating the flights",
            explaination: "Missing madatory properties to update a flight"
        });
    }
    next();
}

module.exports = {
    validateCreateFlight,
    validateUpdateFlight
}