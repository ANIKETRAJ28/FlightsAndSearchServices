const { Airplane } = require("../models/index");

class AirplaneRepository { 
    async getAirplane(id) {
        try {
            console.log(id);
            const result = await Airplane.findByPk(id);
            return result;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports = AirplaneRepository;