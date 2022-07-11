const process = require('process')
const axios = require('axios').default;

const headers = {
    apikey: process.env.EXCHANGE_TOKEN
}

class ExchangeApi {

    #isTypeOfCurrency(entity) {
        if (!entity['userID'] && !entity['to'] && !entity['from'] && !entity['value']) {
            throw new Error('invalid type')
        }
    }

    async convert(currency) {
        this.#isTypeOfCurrency(currency)
        const url = `https://api.apilayer.com/exchangerates_data/convert?to=${currency.to}&from=${currency.from}&amount=${currency.value}`
        return await axios.get(url, { headers: headers })
    }
}

module.exports = ExchangeApi