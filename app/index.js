const Express = require('express')
const app = Express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json');

app.use(Express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    return res.json({
        "message": "Hello"
    })
})

app.get('/user', (req, res) => {
    return res.json([
        {
            id: 1,
            name: 'Leandro Costa',
            email: 'lcosta.sp.br@gmail.com'
        }
    ])
})

app.get('/user/:id', (req, res) => {
    const { id } = req.params
    return res.json({
        id: id,
        name: 'Leandro Costa',
        email: 'lcosta.sp.br@gmail.com'
    })
})

app.post('/user', (req, res) => {
    const { user } = req.body
    return res.status(201).json(user)
})

app.delete('/user/:id', (req, res) => {
    const { id } = req.params
    return res.status(204).send()
})

app.put('/user/:id', (req, res) => {
    const { id } = req.params
    const { user } = req.body
    console.log(user);
    return res.status(200).json({ id: id, ...user })
})

app.post('/currency', (req, res) => {
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
})

app.listen(port, () => {
    console.log(`Application is running ${port}`);
})