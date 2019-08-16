'use strict';

const mongoose = require('mongoose');

//Esquema del autor

let autor_schema = new mongoose.Schema({
    imagen: { type: String, required: true, unique: false },
    autor: { type: String, required: true, unique: false },
    nacionalidad: { type: String, required: true, unique: false },
    fecha_nacimiento: { type: String, required: true, unique: false },
    fecha_defuncion: { type: String, required: false, unique: false },
    biografia: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('autor', autor_schema);