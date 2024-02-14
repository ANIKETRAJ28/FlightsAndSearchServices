const { Flights } = require("../models/index");
const CrudRepository = require("./crud-repository");
const { Op } = require("sequelize");

class FlightRepository extends CrudRepository {

    // private are assigned by #
    #createFilter(data) {
        let filter = {};
        let priceFilter = [];

        if(data.maxPrice) {
            priceFilter.push({price: {[Op.lte]: data.maxPrice}})
        }
        if(data.minPrice) {
            priceFilter.push({price: {[Op.gte]: data.minPrice}})
        }
        Object.assign(filter, {[Op.and]: priceFilter});
        return filter;
    }

    constructor() {
        super(Flights)
    }
    async getAll(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            if(flight == false) {
                throw new AppError(
                    "BAD REQUEST", 
                    "Failed to get all flights",
                    "Flights not present",
                    StatusCodes.NOT_FOUND
                );
            }
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}

module.exports = FlightRepository;

        // let filter = {...data};
        // if(data.departureAirportId) {
        //     filter.departureAirportId = data.departureAirportId;
        // }
        // if(data.arrivalAirportId) {
        //     filter.arrivalAirportId = data.arrivalAirportId;
        // }

        // if(data.minPrice && data.maxPrice) {
        //     // [Op.gte] Operator: greater than equal to
        //     // [Op.lte] Operator: less than equal to
        //     // [Op.and] Operator: cond1 and cond2
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: {[Op.lte]: data.maxPrice} },
        //             { price: {[Op.gte]: data.minPrice} } 
        //         ]
        //     });
        // }
        // else if(data.minPrice) {
        //     Object.assign(filter, {
        //         [Op.gte]: data.minPrice
        //     });
        // }
        // else if(data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.lte]: data.maxPrice
        //     });
        // }