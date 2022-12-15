const express = require('express')
const router = express.Router()
const controller = require('../controller/instituicoesController')

router.get('/', function (req, res) {
    res.status(200).send({
        title: "Faça Acontecer",
        version: "1.0.0"
    })

})

router.get('/instituicoes', function (req, res) {

 controller.findAllInstituicoes (req,res)
});
router.post('/instituicao',function (req, res) {
    controller.registerNewInstituicao(req,res)
});
router.delete('/instituicao/:id',function (req, res) {
    controller.deleteInstituicao(req,res)
});

router.patch('/instituicoes/atualizar/:id', function (req, res) {

 controller.updateinstituicoes (req, res)
});


module.exports = router
