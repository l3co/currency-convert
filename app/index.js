const Express = require('express')
const app = Express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json');

app.use(Express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({
        "message": "Hello"
    })
})

app.listen(port, () => {
    console.log(`Application is running ${port}`);
})