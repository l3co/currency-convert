class UserController {
    static listAll(req, res) {
        return res.json([
            {
                id: 1,
                name: 'Leandro Costa',
                email: 'lcosta.sp.br@gmail.com'
            }
        ])
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
        const { id } = req.params
        return res.status(204).send()
    }
}


module.exports = UserController