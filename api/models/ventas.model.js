'use strict';

const mongoose = require('mongoose');

//Esquema del autor

let ventas_schema = new mongoose.Schema({
    idlibreria: { type: String, required: true, unique: false },
    idSuc: { type: String, required: true, unique: false },
    idUser: { type: String, required: true, unique: false },
    idLibro: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('venta', ventas_schema);