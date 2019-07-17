'use strict';

const mongoose = require('mongoose');

//Esquema del usuario
// VERIFICAR LOS TIPOS DE DATOS MAS ADELANTE

let usuario_schema = new mongoose.Schema({
    usuario: { type: String, required: true, unique: false },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true, unique: false },
    verfContrasena: { type: String, required: true, unique: false },
    libreria: {type: String, required: false, unique: false},
    club: {type: String, required: false, unique: false},
    nombre: {type: String, required: true, unique: false},
    identificacion: {type: String, required: true, unique: false},
    sexo: {type: String, required: true, unique: false},
    primer_apellido: {type: String, required: true, unique: false},
    segundo_apellido: {type: String, required: true, unique: false},
    provincia: {type: String, required: true, unique: false},
    canton: {type: String, required: true, unique: false},
    distrito: {type: String, required: true, unique: false},
    direccion_exacta: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('Usuario', usuario_schema);