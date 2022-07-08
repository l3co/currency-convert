const Express = require('express')
const routes = require('./routes')
const process = require('process')

const app = Express()

routes(app)

const port = process.env.PORT || 3001;

app.get('/', (_, res) => {
    return res.redirect("/api-docs")
})

app.listen(port, () => {
    console.log(`Application is running ${port}`);
})

module.exports = app