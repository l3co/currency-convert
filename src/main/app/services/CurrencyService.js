const Currency = require("../../domain/Currency");

class CurrencyService {

    constructor(repository, exchageApi) {
        this.repository = repository;
        this.api = exchageApi
    }

    #bindingCurrencyValues(currency, result) {
        if (result['data']) {
            currency.setTax(result['data']['info']['rate'])
            currency.setDate(result['data']['info']['timestamp'])
            currency.setResult(result['data']['result'])
        } else {
            // TODO create a custom error
            throw new Error('invalid result from exchange api')
        }
    }

    async create(c) {
        const currency = new Currency(c['user_id'], c['to'], c['from'], c['value']);
        currency.validate();
        const result = await this.api.convert(currency)
        this.#bindingCurrencyValues(currency, result)

        try {
            await this.repository.create(currency)
            return currency;
        }
        catch (err) {
            // TODO create a custom error
            throw new Error('Error to make request to Exchange API ' + err.message)
        }
    }
}

module.exports = CurrencyService