const { Router } = require('express')
const CurrencyController = require('../controllers/CurrencyController')

const router = Router()

router.post('/currency', CurrencyController.convert)

module.exports = router