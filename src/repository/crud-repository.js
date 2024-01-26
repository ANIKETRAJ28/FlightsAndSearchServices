// class CrudRepository {
//     constructor(model) {
//         this.model = model;
//     }

//     async create(data) {
//         try {
//             const response = await this.model.create(data);
//             return response;
//         } catch (error) {
//             console.log("something went wrong in the crud-repository layer");
//             throw{error};
//         }
//     }

//     async get(data) {
//         try {
//             console.log("hello");
//             const response = await this.model.findByPk(data);
//             return response;
//         } catch (error) {
//             console.log("something went wrong in the crud-repository layer");
//             throw{error};
//         }
//     }

//     async getAll(data) {
//         try {
//             const response = await this.model.getAll(data);
//             return response;
//         } catch (error) {
//             console.log("something went wrong in the crud-repository layer");
//             throw{error};
//         }
//     }

//     async destroy(data) {
//         try {
//             const response = await this.model.destroy(data);
//             return response;
//         } catch (error) {
//             console.log("something went wrong in the crud-repository layer");
//             throw{error};
//         }
//     }

//     async update(data) {
//         try {
//             const response = await this.model.update(data);
//             return response;
//         } catch (error) {
//             console.log("something went wrong in the crud-repository layer");
//             throw{error};
//         }
//     }
// }

// module.exports = CrudRepository;

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crus repo");
            throw error;
        }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in crus repo");
            throw error;
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crus repo");
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crus repo");
            throw error;
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                },
                 
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crus repo");
            throw error;
        }
    }
}

module.exports = CrudRepository;