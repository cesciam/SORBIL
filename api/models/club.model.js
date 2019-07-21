'use-strict';

const mongoose = require('mongoose');

//Esquema del registro del libro

let club_schema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    tema: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: false },
    categoria: { type: String, required: true, unique: false },
    genero: { type: String, required: true, unique: false },
    fecha: { type: Date, required: true, unique: false },
    provincia: { type: String, required: true, unique: false },
    canton: { type: String, required: true, unique: false },
    distrito: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('club', club_schema);