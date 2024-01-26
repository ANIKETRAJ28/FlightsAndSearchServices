// const { City } = require("../models/index");
// const { Op } = require("sequelize");

// class CityRepository {
//     async create({ name }) { // {name: "New Delhi"}
//         try {
//             const city = await City.create({
//                 name // name: name
//             });
//             return city;
//         } catch(error) {
//             console.log("something went wrong in the repository layer");
//             throw{error};
//         }
//     }

//     async delete(cityId) { // {id: cityId}
//         try {
//             await City.destroy({
//                 where: {
//                     id: cityId
//                 }
//             });
//             return true;
//         } catch(error) {
//             throw{error};
//         }
//     }

//     async get(cityId) { // {id: cityId}
//         try {
//             const city = await City.findByPk(cityId); // finds the city by primary key
//             return city;
//         } catch(error) {
//             console.log("something went wrong in the repository layer");
//             throw{error};
//         }
//     }

    // async getAll(filter) { // filter can be empty also
    //     try {
    //         if(filter.name) { // if filter property is not undefined
    //             const AllCities = await City.findAll({
    //                 where: {
    //                     name: {
    //                         [Op.startsWith] : filter.name
    //                     }
    //                 }
    //             });
    //             return AllCities;
    //         }
    //         const AllCities = await City.findAll();
    //         return AllCities;
    //     } catch (error) {
    //         console.log("something went wrong in the repository layer");
    //         throw{error};
    //     }
    // }

//     async update(cityId, data) {
//         try {
//             // The below approach also works but will not return updated object
//             // if we are using Pg then returning: true can be used, else not
//             // const city = await City.update(data, {
//             //     where: {
//             //       id: cityId
//             //     }
//             // });
//             // return city;
//             // for getting updated data in mysql we use the below approach
//             const city = await City.findByPk(cityId);
//             city.name = data.name;
//             await city.save();
//             return city;
//         } catch(error) {
//             console.log("something went wrong in the repository layer");
//             throw{error};
//         }
//     }
// };

// module.exports = CityRepository;
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
            throw{error};
        }
    }
};

module.exports = CityRepository;