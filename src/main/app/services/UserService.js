class UserService {

    constructor(repository) {
        this.repository = repository;
    }

    async listAll() {
        return await this.repository.listAll();
    }

    async findByID(id) {
        return await this.repository.findByID(id);
    }

    async create(user) {
        return await this.repository.create(user);
    }

    async update(id, user) {
        return await this.repository.update(id, user);
    }

    async delete(id) {
        return await this.repository.delete(id);
    }
}

module.exports = UserService