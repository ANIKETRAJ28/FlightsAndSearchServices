// const { Airport } = require("../models/index");
// const { Op } = require("sequelize");
// const CrudRepository = require("./crud-repository"); 

// class AirportRepository {

//     async create({name, cityId}) {
//         try {
//             const airport = await Airport.create({
//                 name,
//                 cityId
//             });
//             return airport;
//         } catch (error) {
//             console.log("something went wrong in the repository layer");
//             throw{error};
//         }
//     }

//     async get(airportId) {
//         try {
//             const airport = await Airport.findByPk(airportId);
//             return airport;
//         } catch (error) {
//             console.log("something went wrong in the repository layer");
//             throw{error};
//         }
//     }

//     async delete(airportId) {
//         try {
//             const airport = await Airport.findByPk(airportId);
//             await airport.destroy();
//             return true;
//         } catch (error) {
//             throw{error};
//         }
//     }

//     async update(airportId, airportName) {
//         try {
//             // await Airport.update({ name: airportName }, {
//             //     where: {
//             //       id: airportId
//             //     }
//             //   });
//             const airport = await Airport.findByPk(airportId);
//             airport.name = airportName;
//             return airport;
//         } catch (error) {
//             console.log("something went wrong in the repository layer");
//             throw{error};
//         }
//     }

//     async getAll(filter) {
//         try {
//             if(filter.name) {
//                 const airport = Airport.findAll({
//                     where: {
//                         name: {
//                             [Op.startsWith] : filter.name
//                         }
//                     }
//                 })
//                 return airport;
//             }
//             const airport = Airport.findAll();
//             return airport;
//         } catch (error) {
//             console.log("something went wrong in the repository layer");
//             throw{error};
//         }
//     }
// }

// module.exports = AirportRepository;

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
            throw{error};
        }
    }
}

module.exports = AirportRespository;