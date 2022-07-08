const service = require('../services/UserService')

class UserController {

    static async listAll(_, res) {
        try {
            const users = await service.listAll()
            return res.json(users)
        } catch (err) {
            return res.json({ message: err.message })
        }
    }

    static async findByID(req, res) {
        const { id } = req.params
        try {
            const user = await service.findByID(id)
            return user ? res.json(user) : res.status(404).json({ message: 'User not found' })
        } catch (err) {
            return res.status(400).json({ message: err.message })
        }
    }

    static async create(req, res) {
        try {
            const user = req.body
            await service.create(user)
            return res.status(201).send()
        } catch (err) {
            return res.status(400).json({ message: err.message })
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const user = req.body
        try {
            const userResponse = await service.update(id, user)
            return res.status(200).json(userResponse)
        } catch (error) {
            return res.status(400).json({ message: 'Error to update user' })
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params
            await service.delete(id)
            return res.status(204).send()
        } catch (error) {
            return res.status(400).json({ message: 'Error to delete user' })
        }
    }
}


module.exports = UserController