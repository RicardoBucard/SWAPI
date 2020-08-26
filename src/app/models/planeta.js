const mongoose = require('../../database');

const PlanetaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    clima: {
        type: String,
        require: true,
    },
    terreno: {
        type: String,
        require: true,
    },
    aparicoesFilmes: {
        type: Number,
        require: true,
    }
});

PlanetaSchema.index({ nome:"text" });
const Planeta = mongoose.model('Planeta', PlanetaSchema);
module.exports = Planeta;