const express = require('express');
const { getHeroes } = require('../model/superHeroes.model');

const router = express.Router();

router.get("/sh",(req, res) => {
    res.json(getHeroes())
})

module.exports = router;