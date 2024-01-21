const { CityRepository } = require("../repository/index"); // this object will require all the repositories from the repository directory

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(cityName) {
        try {
            const city = await this.cityRepository.createCity(cityName);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async getAllCities() {
        try {
            const AllCities = await this.cityRepository.getAllCities();
            return AllCities;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }
}

module.exports = CityService;