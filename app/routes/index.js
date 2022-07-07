const express = require('express')
const user = require('./userRoute')
const currency = require('./currencyRoute')

const { swaggerUi, swaggerDocument } = require('./docRoute')

module.exports = app => {
    app.use(
        user,
        currency,
        express.json()
    )

    // DOC
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}