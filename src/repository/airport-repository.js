const CrudRespository = require('./crud-repository');
const { Op } = require("sequelize");
const { Airport } = require('../models/index');
class AirportRespository extends CrudRespository {
    constructor() {
        super(Airport);
    }

    async getAll(filter) {
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
            throw error;
        }
    }
}

module.exports = AirportRespository;