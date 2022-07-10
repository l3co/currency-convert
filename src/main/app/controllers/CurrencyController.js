const { CurrencyService } = require('../services')

class CurrencyController {

    static async convert(req, res) {
        console.log(req.body)
        const result = await CurrencyService.create(req.body)

        return res
            .status(200)
            .json(result)
    }
}

module.exports = CurrencyController