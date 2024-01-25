const {AirplaneService} = require("../services/index");

const airplaneService = new AirplaneService();

const get = async(req, res) => {
    try {
        console.log(req.params.id);
        const response = await airplaneService.getAirplane(req.params.id);
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

module.exports = {
    get
};