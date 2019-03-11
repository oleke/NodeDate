const express = require('express')
const app = express()
const port = 3300

const routes = require('app/routes')

app.use(routes)

//Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))