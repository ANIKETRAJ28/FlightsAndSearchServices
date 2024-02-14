const {AirplaneService} = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const airplaneService = new AirplaneService();

const get = async(req, res) => {
    try {
        const response = await airplaneService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched the data",
            err: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Failed to fetch the data",
            err: error
        });
    }
}

module.exports = {
    get
};