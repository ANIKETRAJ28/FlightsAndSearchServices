const { CityService } = require("../services/index");

const create = async(req, res) => {
    try {
        const city = await CityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create a city",
            err: error
        });
    }
}

const destroy = async(req, res) => {
    try {
        const response = await CityService.deleteCity(req.params.id);
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

const update = async(req, res) => {
    try {
        const response = await CityService.updateCity(req.params.id, req.body);
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
            message: "Failed to update the data",
            err: error
        });
    }
}

const get = async(req, res) => {
    try {
        const response = await CityService.getCity(req.params.id, req.params);
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