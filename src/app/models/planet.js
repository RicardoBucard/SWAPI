const mongoose = require('../../database');

const PlanetSchema = new mongoose.Schema({
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

PlanetSchema.index({ nome:"text" });
const Planet = mongoose.model('Planet', PlanetSchema);
module.exports = Planet;