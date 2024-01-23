const { Airport } = require("../models/index");
const { Op } = require("sequelize");

class AirportRepository {
    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async deleteAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            await airport.destroy();
            return true;
        } catch (error) {
            throw{error};
        }
    }

    async updateAirport(airportId, airportName) {
        try {
            // await Airport.update({ name: airportName }, {
            //     where: {
            //       id: airportId
            //     }
            //   });
            const airport = await Airport.findByPk(airportId);
            airport.name = airportName;
            return airport;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async getAllAirport(filter) {
        try {
            if(filter.name) {
                const airport = Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return airport;
            }
            const airport = Airport.findAll();
            return airport;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports = AirportRepository;