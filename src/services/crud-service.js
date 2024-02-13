class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async get(data) {
        try {
            const response = await this.repository.get(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw error;
        }
    }

    async getAll(data) {
        try {
            const response = await this.repository.getAll(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw error;
        }
    } 

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw error;
        }
    }

    async destroy(data) {
        try {
            const response = await this.repository.destroy(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw error;
        }
    }

    async update(data) {
        try {
            const response = await this.repository.update(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw error;
        }
    }
}

module.exports = CrudService;