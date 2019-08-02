'use strict';

const express = require('express'),
    router = express.Router(),
    Contacto = require('../models/perfil-autor.model');


router.param('_id', function(req, res, next, _id) {
    req.body._id = _id;
    next();
});

router.param('autor', function(req, res, next, autor) {
    req.body.autor = autor;
    next();
});

router.param('fecha', function(req, res, next, fecha) {
    req.body.fecha = fecha;
    next();
});

router.param('biografia', function(req, res, next, biografia) {
    req.body.biografia = biografia;
    next();
});
//Definición de la ruta para registrar contactos

router.post('/perfil-autor', function(req, res) {
    let body = req.body;

    let nuevo_autor = new autor({
        fecha: body.fecha,
        biografia: body.biografia,
    });

    nuevo_autor.save(
        function(err, contactoDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El contacto no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El contacto se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar-contactos', function(req, res) {
    Contacto.find(function(err, contactosBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los contactos',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_contactos: contactosBD
            });
        }
    })
});

router.get('/buscar-contacto-id/:_id', function(req, res) {
    Contacto.findById(req.body._id, function(err, contactoBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún contacto con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                contacto: contactoBD
            });
        }
    })
});

router.get('/buscar-contacto-correo/:correo', function(req, res) {
    Contacto.find({ correo: req.body.correo }, function(err, contactoBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún contacto con ese correo',
                err
            });
        } else {
            return res.json({
                success: true,
                contacto: contactoBD
            });
        }
    })
});

module.exports = router;