const { City } = require("../models/index");
const { Op } = require("sequelize");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }

    async getAll(filter) {
        try {
            if(filter.name) {
                const AllCities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return AllCities;
            }
            const AllCities = await City.findAll();
            return AllCities;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
};

module.exports = CityRepository;