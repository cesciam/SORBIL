'use-strict';

const mongoose = require('mongoose');

//Esquema del registro del libro

let libreria_schema = new mongoose.Schema({
    avatar: { type: String, required: true, unique: false },
    usuario: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    contrasenna: { type: String, required: true, unique: false },
    empresa: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    provincia: { type: String, required: true, unique: false },
    canton: { type: String, required: true, unique: false },
    distrito: { type: String, required: true, unique: false },
    direccion_exacta: { type: String, required: true, unique: false },
    geoloc: { type: String, coordinates: [] }
});

module.exports = mongoose.model('Libreria', libreria_schema);