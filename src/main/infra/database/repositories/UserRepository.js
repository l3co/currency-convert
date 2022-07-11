const { User, Currency } = require('../models')

class UserRepository {

    static async listAll() {
        return await User
            .findAll({ include: { model: Currency, as: 'Currencies' } })
    }

    static async findByID(id) {
        return await User.findOne(
            { include: { model: Currency, as: 'Currencies' } },
            { where: { id: id } }
        )
    }

    static async create(user) {
        return await User.create(user)
    }

    static async update(id, user) {
        return await User.update(user, { where: { id: id } })
    }

    static async delete(id) {
        return await User.destroy({ where: { id: id } })
    }
}

module.exports = UserRepository