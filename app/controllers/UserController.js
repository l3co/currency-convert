const service = require('../services/UserService')

class UserController {

    static async listAll(req, res) {
        try {
            const users = await service.listAll()
            return res.json(users)
        } catch (err) {
            return res.json({ message: err.message })
        }
    }

    static findByID(req, res) {
        const { id } = req.params
        return res.json({
            id: id,
            name: 'Leandro Costa',
            email: 'lcosta.sp.br@gmail.com'
        })
    }

    static create(req, res) {
        return res.status(201).send()
    }

    static update(req, res) {
        const { id } = req.params
        const { user } = req.body
        console.log(user);
        return res.status(200).json({ id: id, ...user })
    }

    static delete(req, res) {
        return res.status(204).send()
    }
}


module.exports = UserController