const joi = require('joi');

const Schema = joi.object({
    nome: joi.string().required(),
    clima: joi.string().required(),
    terreno: joi.string().required(),
    aparicoesFilmes: joi.number().required()
});

module.exports = Schema;