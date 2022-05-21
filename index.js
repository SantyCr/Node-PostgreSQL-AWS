const express = require('express')
const superHeroes = require('./model/superHeroes.model')
const name = require('./model/superHeroes.model')
const app = express()
const port = 3000

superHeroes()
app.get('/', (req, res) => res.json({asd: 'Hello World!'}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
