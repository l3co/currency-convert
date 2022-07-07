class CurrencyController {

    static convert(req, res) {
        return res
            .status(200)
            .json({
                id: 1,
                user_id: 1,
                source_currency: 'BRL',
                destination_currency: 'USD',
                input_value: 5.24,
                output_value: 1,
                tax: '1%',
                datetime: `${Date.now()}`,
            })
    }
}

module.exports = CurrencyController