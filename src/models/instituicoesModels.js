const mongoose = require('mongoose')

const instituicoesSchema = mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
        nome: { type: String, required: true },
        contato: { type: String, required: true },
        endereco: { type: String, required: true },
        regiao: { type: String },
        atuacao: { type: String },
        
    },
    {
        versionKey: false,
    }
)

const instituicoes = mongoose.model('instituicoes', instituicoesSchema)

module.exports = instituicoes