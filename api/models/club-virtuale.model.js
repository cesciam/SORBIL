'use-strict';

const mongoose = require('mongoose');

//Esquema del registro del club virtual

let club_virtuale_schema = new mongoose.Schema({
    //imagen
    nombre: { type: String, required: true, unique: true },
    tema: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: false },
    categoria: { type: String, required: true, unique: false },
    genero: { type: String, required: true, unique: false },
    fecha: { type: Date, required: true, unique: false },
});

module.exports = mongoose.model('club-virtuale', club_virtuale_schema);