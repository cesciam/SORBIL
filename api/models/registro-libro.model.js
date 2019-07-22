'use-strict';

const mongoose = require('mongoose');

//Esquema del registro del libro

let registro_libro_schema = new mongoose.Schema({
    titulo: { type: String, required: true, unique: false },
    autor: { type: String, required: true, unique: false },
    edicion: { type: String, required: true, unique: false},
    editorial: {type: String, required: true, unique: false},
    fecha: {type: Date, required: true, unique: false},
    categoria: {type: String, required: true, unique: false},
    genero: {type: String, required: true, unique: false},
    idioma: {type: String, required: true, unique: false},
    precio: {type: Number, required: true, unique: false},
    tipo: {type: String, required: true, unique: false},
    isbn: {type: String, required: true, unique: true},
    portada: {type: String, required: true, unique: false},
    contraportada: {type: String, required: true, unique: false},
    sinopsis: {type: String, required: true, unique: false}
});

module.exports =  mongoose.model('Libro', registro_libro_schema);