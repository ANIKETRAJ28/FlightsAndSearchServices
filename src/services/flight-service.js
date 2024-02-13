const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async create(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: "Departure time cannot be less than arrival time"};
            }
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            const response = await this.flightRepository.create({
                ...data, totalSeats:airplane.capacity
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async get(flightId) {
        try {
            const response = await this.flightRepository.get(flightId);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getAll(filter) {
        try {
            const flight = await this.flightRepository.getAll(filter);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async update(flightId, data) {
        console.log(flightId, data);
        try {
            const response = await this.flightRepository.update(flightId, data);
            return response;
        } catch(error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }
}

module.exports = FlightService;

/**
 * {
 *    flightNumber,
 *    airplaneId,
 *    departureAirportId,
 *    arrivalAirportId,
 *    arrivalTime,
 *    departureTime,
 *    price,
 *    boardingGate,
 *    totalSeats  -> airplane
 * }
 */

// obj = {a: 1, b: 2};
// { a: 1, b: 2 }
// obj['c'] = 3;
// 3
// obj
// { a: 1, b: 2, c: 3 }
// obj = {...obj, d: 4};
// { a: 1, b: 2, c: 3, d: 4 }