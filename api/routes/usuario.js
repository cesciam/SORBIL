'use strict';

const express = require('express'),
    router = express.Router(),
    Usuario = require('../models/usuario.model');

//Definición de la ruta para registrar contactos

router.post('/registrar-usuario', function (req, res) {
    let body = req.body;

    let nuevo_usuario = new Usuario({
        usuario: body.usuario,
        correo: body.correo,
        contrasena: body.contrasena,
        verfContrasena: body.verfContrasena,
        nombre: body.nombre,
        id: body.id,
        primer_apellido: body.primer_apellido,
        segundo_apellido: body.segundo_apellido,
        sexo: body.sexo,
        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,
        direccion_exacta: body.direccion_exacta
    });

    nuevo_usuario.save(
        function (err, usuariosBD) {
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

router.get('/listar-usuarios', function (req, res) {
    Usuario.find(function (err, usuariosBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los usuarios',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_usuarios: usuariosBD
            });
        }
    })
});

module.exports = router;