const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) { // {name: "New Delhi"}
        try {
            const city = await City.create({
                name // name: name
            });
            return city;
        } catch(error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async deleteCity({ cityId }) { // {id: cityId}
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch(error) {
            throw{error};
        }
    }

    async getCity(cityId) { // {id: cityId}
        try {
            const city = await City.findByPk(cityId); // finds the city by primary key
            return city;
        } catch(error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async updateCity(cityId, { data }) {
        try {
            const city = await City.update({ name: data }, {
                where: {
                  id: cityId
                }
            });
            return city;
        } catch(error) {
            
        }
    }
};

module.exports = CityRepository;