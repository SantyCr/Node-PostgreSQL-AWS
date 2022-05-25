const express = require('express');
const { getHeroes, putHeroes, postHeroes, deleteHeroes } = require('../model/superHeroes.model');

const router = express.Router();

router.get("/sh",(req, res) => {
    getHeroes((resp) => {
        res.json(resp)
    });
})
router.post("/sh",(req, res) => {
    res.json(postHeroes(req.body))
})
router.put("/sh",(req, res) => {
    res.json(putHeroes(req.body))
})
router.delete("/sh/:id",(req, res) => {
    res.json(deleteHeroes(req.params.id))
})


module.exports = router;
