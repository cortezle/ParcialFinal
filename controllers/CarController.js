var Car = require('../models/Car');
var mongoose = require('mongoose');

//aqui deifiniremos el crud de la pagina
 
var CarController ={};

CarController.index = async function(req,res,next){
    var cars = await cars.find();
    try {
        return res.status(200).json({message:"exito"});
    } catch (error) {
        return res.status(500).json({error: error});   
    }
}

 CarController.store = async function(req,res,next){
    var f = new Car();
    f.marca = req.body.marca;
    f.modelo = req.body.modelo;
    f.anio = res.body.anioo
    try {
        await f.save();
        return res.status(200).json({message:"exito"});
    } catch (error) {
        return res.status(500).json({error: error});
    }
}

module.exports = CarController;