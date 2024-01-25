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

    async getFlightData() {
        // todo
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