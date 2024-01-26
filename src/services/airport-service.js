// const { AirportRepository } = require("../repository/index");
// const CrudService = require("./crud-service");
// class AirportService {

//     constructor() {
//         this.airportService = new AirportRepository();
//     }

//     async createAirport(data) {
//         try {
//             const airport = await this.airportService.createAirport(data);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }

//     async getAirport(airportId) {
//         try {
//             const airport = await this.airportService.getAirport(airportId);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }

//     async deleteAirport(airportId) {
//         try {
//             const airport = await this.airportService.deleteAirport(airportId);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }

//     async updateAirport(airportId, airportName) {
//         try {
//             const airport = await this.airportService.updateAirport(airportId, airportName);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }

//     async getAllAirport(filter) {
//         try {
//             const airport = await this.airportService.getAllAirport({name: filter.name});
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the service layer");
//             throw(error);
//         }
//     }
// }

// module.exports = AirportService;

const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index');

class AirportService extends CrudService {
    constructor() {
        const airportRespository = new AirportRepository(); 
        super(airportRespository);
    }
}

module.exports = AirportService;