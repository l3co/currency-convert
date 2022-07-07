const { User } = require('../../infra/database/models')

class UserService {

    static async listAll() {
        return await User.findAll()
    }
}

module.exports = UserService