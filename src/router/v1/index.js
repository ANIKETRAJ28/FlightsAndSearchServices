const express = require("express");
const {CityController, AirportController, AirplaneController, FlightController} = require("../../controllers/index");
const { validationFlight, validationCity, validationAirport } = require("../../middlewares/index");
const router = express.Router();

router.post("/city", validationCity.validateCreateCity, CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", validationCity.validateUpdateCity, CityController.update);

router.post("/airports", validationAirport.validateCreateAirport, AirportController.create);
router.get("/airports/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.delete("/airports/:id", AirportController.destroy);
router.patch("/airports/:id", validationAirport.validateUpdateAirport, AirportController.update);

router.get("/airplane/:id", AirplaneController.get);

router.post("/flights", validationFlight.validateCreateFlight, FlightController.create);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.patch("/flights/:id", validationFlight.validateUpdateFlight, FlightController.update);
module.exports = router;