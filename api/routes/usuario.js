'use strict';

const express = require('express'),
    router = express.Router(),
    Usuario = require('../models/usuario.model');

//Definición de la ruta para registrar usuarios

router.post('/registrar-usuario', function (req, res) {
    let body = req.body;

    let nuevo_usuario = new Usuario({
        usuario: body.usuario,
        correo: body.correo,
        contrasena: body.contrasena,
        verfContrasena: body.verfContrasena,
        libreria: body.libreria,
        club: body.club,
        nombre: body.nombre,
        identificacion: body.identificacion,
        sexo: body.sexo,
        primer_apellido: body.primer_apellido,
        segundo_apellido: body.segundo_apellido,
        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,
        direccion_exacta: body.direccion_exacta
    });

    nuevo_usuario.save(
        function (err, usuarioDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El usuario no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El usuario se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar-usuarios', async function (req, res) {
    Usuario.find()
        .then(lista_usuarios => {
            return res.json({
                success: true,
                lista_usuarios: lista_usuarios
            });
        })
        .catch(err => { throw new Error(err) });
});
module.exports = router; 