'use-strict';

const mongoose = require('mongoose');

//Esquema del registro del libro

let libreria_schema = new mongoose.Schema({
    //Info de la librería
    imagen: { type: String, required: true, unique: false },
    usuario: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true, unique: false },
    empresa: { type: String, required: true, unique: true },
    telefono: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    provincia: { type: String, required: true, unique: false },
    canton: { type: String, required: true, unique: false },
    distrito: { type: String, required: true, unique: false },
    direccion_exacta: { type: String, required: true, unique: false },
    direccion_latitud: { type: Number, required: true, unique: false },
    direccion_longitud: { type: Number, required: true, unique: false },
    //Info del administrador
    avatar: { type: String, required: false, unique: false },
    nombre: { type: String, required: false, unique: false },
    primer_apellido: { type: String, required: false, unique: false },
    segundo_apellido: { type: String, required: false, unique: false },
    id: { type: String, required: false, unique: true },   
    fecha: { type: Date, required: false, unique: false },
    edad: { type: String, required: false, unique: false },
    tipo_usuario: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Libreria', libreria_schema);