const { StatusCodes } = require("http-status-codes");

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

const validateGetAllFlight = (req, res, next) => {
    if(req.query.maxPrice && req.query.minPrice && req.query.maxPrice < req.query.minPrice) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for fetching the flights",
            explaination: "Maxprice is less than minprice"
        });
    }
    next();
}

module.exports = {
    validateCreateFlight,
    validateGetAllFlight
}