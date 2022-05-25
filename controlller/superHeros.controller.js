const express = require('express');
const { getHeroes } = require('../model/superHeroes.model');

const router = express.Router();

router.get("/sh",(req, res) => {
    res.json(getHeroes())
})
router.post("/sh",(req, res) => {
    res.json(getHeroes())
})
router.put("/sh",(req, res) => {
    res.json(getHeroes())
})
router.delete("/sh",(req, res) => {
    res.json(getHeroes())
})


module.exports = router;
