const routes = require('../app/routes')
const express = require('express')
const app = express()
const port = 3300


app.use(routes)

//Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))