'use strict';

const mongoose = require('mongoose');


let usuario_schema = new mongoose.Schema({
    avatar: { type: String, required: true, unique: false },
    usuario: { type: String, required: false, unique: false },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: false, unique: false },
    nombre: { type: String, required: true, unique: false },
    id: { type: String, required: true, unique: false },
    primer_apellido: { type: String, required: true, unique: false },
    segundo_apellido: { type: String, required: true, unique: false },
    sexo: { type: String, required: false, unique: false },
    provincia: { type: String, required: false, unique: false },
    canton: { type: String, required: false, unique: false },
    distrito: { type: String, required: false, unique: false },
    direccion_exacta: { type: String, required: false, unique: false },
    direccion_latitud: { type: Number, required: false, unique: false },
    direccion_longitud: { type: Number, required: false, unique: false },
    tipo_usuario: { type: String, required: true, unique: false },
    edad: { type: String, required: false, unique: false },
    fecha: { type: Date, required: false, unique: false },
    tarjetas: [{
        nombre: { type: String, required: true, unique: false },
        num_tarjeta: { type: String, required: true, unique: false },
        fecha_ven: { type: String, required: true, unique: false },
        cvv: { type: String, required: true, unique: false },
        estado: { type: String, required: true, unique: false }
    }],
    estado: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Usuario', usuario_schema);