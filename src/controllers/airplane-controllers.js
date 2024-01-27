const {AirplaneService} = require("../services/index");
const {SuccessError } = require("../utils/error-codes");
const airplaneService = new AirplaneService();

const get = async(req, res) => {
    try {
        console.log(req.params.id);
        const response = await airplaneService.getAirplane(req.params.id);
        return res.status(SuccessError.OK).json({
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

module.exports = {
    get
};