'use strict';

const mongoose = require('mongoose');

//Esquema del contacto

let contacto_schema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    correo: { type: String, required: true, unique: false },
    nacimiento: { type: Date, required: true, unique: false },
    comentario: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Contacto', contacto_schema);