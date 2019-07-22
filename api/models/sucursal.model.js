'use strict';

const mongoose = require('mongoose');

//Esquema del usuario
// VERIFICAR LOS TIPOS DE DATOS MAS ADELANTE

let sucursal_schema = new mongoose.Schema({
    nombre: {type: String, required: true, unique: false},
    telefono: { type: String, required: true, unique: false },
    correo: { type: String, required: true, unique: true },    
    provincia: {type: String, required: true, unique: false},
    canton: {type: String, required: true, unique: false},
    distrito: {type: String, required: true, unique: false},
    
});

module.exports = mongoose.model('Sucursal', sucursal_schema);