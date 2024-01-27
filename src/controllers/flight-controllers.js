const { FlightService } = require("../services/index");
const {SuccessError } = require("../utils/error-codes");
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
        return res.status(SuccessError.CREATED).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully created a flight"
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            error: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessError.OK).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully fetched the flight"
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a flight",
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlight(req.query);
        return res.status(SuccessError.OK).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully fetched all the flight"
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all flights",
            error: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll
}