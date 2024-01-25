const express = require("express");
const {CityController, AirportController, AirplaneController, FlightController} = require("../../controllers/index");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);
router.delete("/airport/:id", AirportController.destroy);
router.patch("/airport/:id", AirportController.update);

router.get("/airplane/:id", AirplaneController.get);
router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
module.exports = router;