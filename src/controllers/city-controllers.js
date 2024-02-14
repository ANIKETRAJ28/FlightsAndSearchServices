const { CityService } = require("../services/index");
const StatusCodes = require("http-status-codes");
const cityService = new CityService();

const create = async(req, res) => {
    try {
        const reqData = {};
        reqData.name = req.body.name; 
        const city = await cityService.create(reqData);
        return res.status(StatusCodes.CREATED).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Failed to create a city",
            err: error
        });
    }
}

const destroy = async(req, res) => {
    try {
        const response = await cityService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
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
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Failed to delete the data",
            err: error   
        });
    }
}

const update = async(req, res) => {
    try {
        const reqData = {};
        reqData.name = req.body.name;
        const response = await cityService.update(req.params.id, reqData);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully updated the data",
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
            message: "Failed to update the data",
            err: error
        });
    }
}

const get = async(req, res) => {
    try {
        const response = await cityService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched the city",
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
            message: "Failed to fetch the data",
            err: error
        });
    }
}

const getAll = async(req, res) => {
    try {
        const reqData = {};
        reqData.name = req.body.name;
        const cities = await cityService.getAll(reqData);
        return res.status(StatusCodes.OK).json({
            data: cities,
            success: true,
            message: "Successfully fetched all data",
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
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch all data",
            err: error
        });
    }
}

module.exports = {
    create, // create: create
    update, // update: update
    destroy, // destroy: destroy
    get, // get: get
    getAll // getAll: getAll
};