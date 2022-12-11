const express = require('express')
const router = express.Router()
const controller = require('../controller/instituicoesController')

router.get('/', function (req, res) {
    res.status(200).send({
        title: "Faça Acontecer",
        version: "1.0.0"
    })
})

router.get('/instituicoes', controller.findAllInstituicoes);
router.post('/instituicao',function (req, res) {
    controller.registerNewInstituicao(req,res)
});
router.delete('/instituicao/:id',function (req, res) {
    controller.deleteInstituicao(req,res)
});

module.exports = router