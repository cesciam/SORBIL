'use-strict';

const mongoose = require('mongoose');

//Esquema del registro del libro

let libreria_schema = new mongoose.Schema({
    usuario: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    contrasenna: { type: String, required: true, unique: false },
    verificacion_contrasenna: { type: String, required: true, unique: false },
    empresa: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: false },
    provincia: { type: String, required: true, unique: false },
    canton: { type: String, required: true, unique: false },
    distrito: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('Libreria', libreria_schema);