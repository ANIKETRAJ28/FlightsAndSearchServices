const { FlightService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const reqData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const response = await flightService.createFlight(reqData);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: "Successfully created a flight",
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            error: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched the flight",
            err: {}
        });
    } catch (error) {
        if(error.name == "Not Found") {
            return res.status(error.statusCode).json({
                data: {},
                success: false,
                message: error.message,
                explaination: error.explaination
            });
        }
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Not able to get a flight",
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const reqData = {};
        if(req.query.maxPrice) reqData.maxPrice = req.query.maxPrice;
        if(req.query.minPrice) reqData.minPrice = req.query.minPrice;
        const response = await flightService.getAll(reqData);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched all the flight",
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Not able to get a flight",
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const reqData = {};
        reqData.price = req.body.price;
        const response = await flightService.update(req.params.id, reqData);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully updated the flight",
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Not able to updat a flight",
            error: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update
}