const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router
    .get('/user', UserController.listAll)
    .get('/user/:id', UserController.findByID)
    .post('/user', UserController.create)
    .put('/user/:id', UserController.update)
    .delete('/user/:id', UserController.delete)

module.exports = router