var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarroSchema = new Schema({
    marca: String,
    modelo: String,
    anio : Number
});

module.exports = mongoose.model('filtros',CarroSchema)