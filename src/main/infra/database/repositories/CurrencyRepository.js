const { Currency } = require('../models')

class CurrencyRepository {

    static async create(user) {
        return await Currency.create(user)
    }
}

module.exports = CurrencyRepository