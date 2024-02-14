const { AirportService } = require('../services/index');
const { StatusCodes } = require("http-status-codes");
const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const reqData = {};
        reqData.push(!req.body.name, req.body.address, req.body.cityId);
        const response = await airportService.create(reqData);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully created the flight",
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Failed to create the airport",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched the airport",
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Failed to fetch the airport",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const reqData = {};
        reqData.name = req.body.name;
        const response = await airportService.update(req.params.id, reqData);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully updated the airport",
            err: {}
        });
    } catch (error) {
        if(error.name) {
            return res.status(StatusCodes.NOT_FOUND).json({
                data: {},
                success: false,
                message: error.message,
                explaination: error.explaination
                
            });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Failed to updated the airport",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const reqData = {};
        if(req.query.name) reqData.name = req.query.name;
        const response = await airportService.getAll(reqData);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched all the airports",
            err: {}
        });
    } catch (error) {
        if(error.name) {
            return res.status(StatusCodes.NOT_FOUND).json({
                data: {},
                success: false,
                message: error.message,
                explaination: error.explaination
            })
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Failed to get all the airports",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully deleted the airport",
            err: {}
        });
    } catch (error) {
        if(error.name) {
            return res.status(error.statusCode).json({
                data: {},
                success: false,
                message: error.message,
                explaination: error.explaination
            });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Failed to delete the airport",
            err: error   
        });
    }
}

module.exports = {
    get,
    getAll,
    update,
    destroy,
    create
};