const AppError = require("../utils/error-codes");
const { StatusCodes } = require("http-status-codes");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error
        }
    }

    async destroy(modelId) {
        try {
            const res =
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            if(res == false) {
                throw new AppError(
                    "BAD REQUEST", 
                    "Failed to delete the data",
                    "Data not present",
                    StatusCodes.NOT_FOUND
                );
            }
            return true;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async get(modelId) {
        try {
            const response = await this.model.findByPk(modelId);
            if(response == null) {
                throw new AppError(
                    "BAD REQUEST", 
                    "Failed to get the data",
                    "Data not present",
                    StatusCodes.NOT_FOUND
                );
            }
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.findByPk(modelId);
            if(result == null) {
                throw new AppError(
                    "Not Found", 
                    "Failed to get the data",
                    "Data not present",
                    StatusCodes.NOT_FOUND
                );
            }
            result.name = data.name;
            await result.save();
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = CrudRepository;