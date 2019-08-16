'use strict';

const mongoose = require('mongoose');

//Esquema de la categoría

let categoria_schema = new mongoose.Schema({
    categoria: { type: String, required: true, unique: true },
    estado: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('categoria', categoria_schema);