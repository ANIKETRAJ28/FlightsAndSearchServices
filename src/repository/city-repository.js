const { City } = require("../models/index");
const { Op } = require("sequelize");

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

    async deleteCity(cityId) { // {id: cityId}
        try {
            console.log(cityId);
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

    async getAllCities(filter) { // filter can be empty also
        try {
            if(filter.name) { // if filter property is not undefined
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
            throw{error};
        }
    }

    async updateCity(cityId, data) {
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //       id: cityId
            //     }
            // });
            // return city;
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch(error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }
};

module.exports = CityRepository;