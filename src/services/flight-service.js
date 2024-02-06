const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            // obj = {a: 1, b: 2};
            // { a: 1, b: 2 }
            // obj['c'] = 3;
            // 3
            // obj
            // { a: 1, b: 2, c: 3 }
            // obj = {...obj, d: 4};
            // { a: 1, b: 2, c: 3, d: 4 }
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: "Departure time cannot be less than arrival time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const response = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async getAllFlight(filter) {
        try {
            const flight = await this.flightRepository.getAllFlight(filter);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async updateFlight(flightId, data) {
        console.log(flightId, data);
        try {
            const response = await this.flightRepository.updateFlights(flightId, data);
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