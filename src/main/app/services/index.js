const UserRepository = require('../../infra/database/repositories/UserRepository')
const CurrencyRepository = require('../../infra/database/repositories/CurrencyRepository')

const CurrencyService = require('./CurrencyService')
const UserService = require('./UserService')
const ExchangeApi = require('../../infra/gateway/ExchangeApi')

module.exports = {
    CurrencyService: new CurrencyService(CurrencyRepository, new ExchangeApi()),
    UserService: new UserService(UserRepository)
}