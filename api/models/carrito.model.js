'use strict';

const mongoose = require('mongoose');

//Esquema del autor

let carrito_schema = new mongoose.Schema({
    idUsuario: { type: String, required: true, unique: false },
    idLibro: { type: String, required: true, unique: false },
    idLib: { type: String, required: true, unique: false },
    idSuc: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('carrito', carrito_schema);