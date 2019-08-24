'use-strict';

const mongoose = require('mongoose');

//Esquema del registro del libro

let resenna_schema = new mongoose.Schema({
    comentario: { type: String, required: true, unique: false },
    calificacion: { type: Number, required: true, unique: false },
    idUsuario: { type: String, required: true, unique: false},
    idLibro: { type: String, required: true, unique: false},
});

module.exports =  mongoose.model('resenna', resenna_schema);