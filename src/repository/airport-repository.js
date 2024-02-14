const CrudRespository = require('./crud-repository');
const { Op } = require("sequelize");
const { Airport } = require('../models/index');
const AppError = require('../utils/error-codes');
class AirportRespository extends CrudRespository {
    constructor() {
        super(Airport);
    }

    async getAll(filter) {
        try {
            if(filter.name) {
                const airport = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                if(airport == false) {
                    throw new AppError(
                        "AppError",
                        "Failed to get airports",
                        "No airports exists with the name",
                    );
                }
                return airport;
            }
            const airport = Airport.findAll();
            return airport;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
}

module.exports = AirportRespository;