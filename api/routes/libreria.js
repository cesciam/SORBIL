'use strict';

const express = require('express'),
    router = express.Router(),
    libreria = require('../models/libreria.model');


router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

//Definicion de la ruta para registrar los libros

router.post('/registrar-libreria', function (req, res) {
    let body = req.body;

    let nueva_libreria = new libreria({
        avatar: body.avatar,
        usuario: body.usuario,
        correo: body.correo,
        contrasenna: body.contrasenna,
        empresa: body.empresa,
        telefono: body.telefono,
        descripcion: body.descripcion,
        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,
        direccion_exacta: body.direccion_exacta,
        geoloc: body.geoloc
    });


    nueva_libreria.save(
        function (err, libreriaDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'La librería no se pudo registrar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'La librería se registró con éxito'
                });
            }
        }
    );
});

router.get('/listar-librerias', function (req, res) {
    libreria.find(function (err, libreriaDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las librerías',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_librerias: libreriaDB
            });
        }
    })
});

router.get('/buscar-libreria-id/:_id', function (req, res) {
    libreria.findById(req.body._id, function (err, libreriaDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ninguna librería con ese _id.',
                err
            });
        } else {
            return res.json({
                success: true,
                libreria: libreriaDB
            });
        }
    })
});

module.exports = router;
