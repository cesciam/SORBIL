'use-strict';

const mongoose = require('mongoose');

//Esquema del registro del libro

let libreria_schema = new mongoose.Schema({
    //Info de la librería
    imagen: { type: String, required: true, unique: false },
    usuario: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    empresa: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    provincia: { type: String, required: true, unique: false },
    canton: { type: String, required: true, unique: false },
    distrito: { type: String, required: true, unique: false },
    direccion_exacta: { type: String, required: true, unique: false },
    direccion_latitud: { type: Number, required: true, unique: false },
    direccion_longitud: { type: Number, required: true, unique: false },
    sucursales: [{
        nombre: {type: String, required: false, unique: false},
        telefono: { type: String, required: false, unique: false },   
        provincia: {type: String, required: false, unique: false},
        canton: {type: String, required: false, unique: false},
        distrito: {type: String, required: false, unique: false},
        direccion_latitud: {type: Number, required: false, unique: false},
        direccion_longitud: {type: Number, required: false, unique: false},
        estado: {type: String, required: true, unique: false}
    }],
    libros: [{
        idlibro: {type: String, required: false, unique: true},
        cantidad: { type: String, required: false, unique: false }
    }],
    estado: { type: String, required: false, unique: false },
    librosSuc: [{
        idlibro: {type: String, required: false, unique: true},
        idSuc :{type: String, required: false, unique: false},
        cantidad: { type: String, required: false, unique: false }
    }],
});

module.exports = mongoose.model('Libreria', libreria_schema);