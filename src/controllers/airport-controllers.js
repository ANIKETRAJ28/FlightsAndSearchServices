const { AirportService } = require("../services/index");

const airportService = new AirportService();

const get = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched the data",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch the data",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully updated the data",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to updated the data",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await airportService.getAllAirport(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched all the data",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to get all the data",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted the data",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to delete the data",
            err: error   
        });
    }
}

module.exports = {
    get,
    getAll,
    update,
    destroy
};