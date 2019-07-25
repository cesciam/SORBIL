'use strict';

const express = require('express'),
    router = express.Router(),
    Club = require('../models/club.model');

router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

//Definicion de la ruta para registrar los libros

router.post('/registrar-club', function (req, res) {
    let body = req.body;

    let nuevo_club = new Club({
        imagen: body.imagen,
        tipo: body.tipo,
        nombre: body.nombre,
        tema: body.tema,
        correo: body.correo,
        telefono: body.telefono,
        categoria: body.categoria,
        genero: body.genero,
        fecha: body.fecha,
        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,
        direccion_exacta: body.direccion_exacta
    });


    nuevo_club.save(
        function (err, clubDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El club de lectura no se pudo registrar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El club de lectura se registró con éxito'
                });
            }
        }
    );
});

router.get('/listar-clubes', function (req, res) {
    Club.find(function (err, clubesDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los clubes',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_clubes: clubesDB
            });
        }
    })
});

router.get('/buscar-club-id/:_id', function (req, res) {
    Club.findById(req.body._id, function (err, clubDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ningun club con ese _id.',
                err
            });
        } else {
            return res.json({
                success: true,
                club: clubDB
            });
        }
    })
});

module.exports = router;
