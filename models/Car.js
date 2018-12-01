var mongoose = require('mongoose');
mongoose.Schema;

var CarroSchema = {
    marca: String,
    modelo: String,
    anio : Number
};

module.exports = mongoose.model('filtros',CarroSchema)