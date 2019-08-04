'use strict';

const mongoose = require('mongoose');

//Esquema del autor

let autor_schema = new mongoose.Schema({
    imagen: { type: String, required: true, unique: false },
    autor: { type: String, required: true, unique: false },
    biografia: { type: String, required: true, unique: false },
    fecha: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('autor', autor_schema);