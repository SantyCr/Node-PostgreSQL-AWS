const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const { application } = require('express');
const heroesRouter = require('./controlller/superHeros.controller');
const app = express()


//Middleware
app.use(express.json())

//Seguridad
app.use(helmet());
app.use(cors());
//Desabilitar cavesera x-powered-by
app.disable('x-powered-by');

//Rutas
app.use(heroesRouter);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
