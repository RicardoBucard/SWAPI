const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/swapi', { useFindAndModify: false, useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true })
    .then(()=> console.log("Conexão feita com sucesso"))
        .catch((err) => console.log("Erro ao se conectar com o MongoDB: " + err));
mongoose.Promise = global.Promise;



var Schema = mongoose.Schema;

module.exports = mongoose;