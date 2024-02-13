const { CityRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class CityService extends CrudService {
    constructor() {
        const cityRepository = new CityRepository();
        super(cityRepository);
    }
}

module.exports = CityService;