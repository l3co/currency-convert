const UserRepository = require('../../infra/database/repositories/UserRepository')
const CurrencyRepository = require('../../infra/database/repositories/CurrencyRepository')

const CurrencyService = require('./CurrencyService')
const UserService = require('./UserService')

module.exports = {
    CurrencyService: new CurrencyService(CurrencyRepository),
    UserService: new UserService(UserRepository)
}