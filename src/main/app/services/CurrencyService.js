class CurrencyService {

    constructor(repository) {
        this.repository = repository;
    }

    async create(currency) {
        // TODO check if input values is different of null and is not negative

        // TODO make a request to exchange api

        return await this.repository.create(currency);
    }
}

module.exports = CurrencyService