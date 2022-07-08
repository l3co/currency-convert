const express = require('express')
const user = require('./userRoute')
const currency = require('./currencyRoute')

const { swaggerUi, swaggerDocument } = require('./docRoute')

module.exports = app => {
    app.use(
        express.json(),
        user,
        currency
    )

    // DOC
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}