const axios = require('axios').default;

const headers = {
    apikey: "eASG9knlTzKKnRwN8r88lNTy9h0RniFz"
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