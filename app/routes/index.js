const app = module.exports = require('express')()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/home', (req, res) => res.send('you are home!'))