// const { CityRepository } = require("../repository/index"); // this object will require all the repositories from the repository directory

// class CityService {
//     constructor(){
//         this.cityRepository = new CityRepository();
//     }

//     async createCity(cityName) {
//         try {
//             const city = await this.cityRepository.create(cityName);
//             return city;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }

//     async deleteCity(cityId) {
//         try {
//             const response = await this.cityRepository.delete(cityId);
//             return response;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }

//     async updateCity(cityId, data) {
//         try {
//             const city = await this.cityRepository.update(cityId, data);
//             return city;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }

//     async getCity(cityId) {
//         try {
//             const city = await this.cityRepository.get(cityId);
//             return city;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }

//     async getAllCities(filter) {
//         try {
//             const AllCities = await this.cityRepository.getAll({name: filter.name});
//             return AllCities;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }
// }

// module.exports = CityService;

const { CityRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class CityService extends CrudService {
    constructor() {
        const cityRepository = new CityRepository();
        super(cityRepository);
    }
}

module.exports = CityService;