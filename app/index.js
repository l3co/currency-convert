const Express = require('express')
const routes = require('./routes')
const app = Express()

routes(app)
const process = require('process')

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Application is running ${port}`);
})

module.exports = app