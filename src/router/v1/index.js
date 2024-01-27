const express = require("express");
const {CityController, AirportController, AirplaneController, FlightController} = require("../../controllers/index");
const { validateCreateFlight } = require("../../middlewares/index");
const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post("/airports", AirportController.create);
router.get("/airports/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.delete("/airports/:id", AirportController.destroy);
router.patch("/airports/:id", AirportController.update);

router.get("/airplane/:id", AirplaneController.get);

router.post("/flights", validateCreateFlight, FlightController.create);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
module.exports = router;