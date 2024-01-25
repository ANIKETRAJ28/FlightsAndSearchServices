const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const response = await flightService.createFlight(req.body);
        return res.status(201).json({
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
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully fetched the flight"
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

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlight(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully fetched all the flight"
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

module.exports = {
    create,
    get,
    getAll
}