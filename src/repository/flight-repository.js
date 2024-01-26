const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {

    // private are assigned by #
    #createFilter(data) {
        // let filter = {};

        let filter = {...data};
        let priceFilter = [];

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

        if(data.maxPrice) {
            priceFilter.push({price: {[Op.lte]: data.maxPrice}})
        }
        if(data.minPrice) {
            priceFilter.push({price: {[Op.gte]: data.minPrice}})
        }
        Object.assign(filter, {[Op.and]: priceFilter});
        // console.log(filter);
        return filter;
    }
    
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async getAllFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;