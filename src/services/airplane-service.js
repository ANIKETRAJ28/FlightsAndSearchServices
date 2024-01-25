const { AirplaneRepository } = require("../repository/index");

class AirplaneService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async getAirplane(id) {
        try {
            const response = await this.airplaneRepository.getAirplane(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }
}

module.exports = AirplaneService;