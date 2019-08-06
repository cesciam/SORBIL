'use strict';

const express = require('express'),
    router = express.Router(),
    Autor = require('../models/autor.model');


router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

// router.param('autor', function(req, res, next, autor) {
//     req.body.autor = autor;
//     next();
// });

// router.param('fecha', function(req, res, next, fecha) {
//     req.body.fecha = fecha;
//     next();
// });

// router.param('biografia', function(req, res, next, biografia) {
//     req.body.biografia = biografia;
//     next();
// });

//Definición de la ruta para registrar contactos

router.post('/registrar-autor', function(req, res) {
    let body = req.body;

    let nuevo_autor = new Autor({
        imagen: body.imagen,
        autor: body.autor,
        fecha: body.fecha,
        biografia: body.biografia,
    });

    nuevo_autor.save(
        function(err, autorDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El autor no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El autor se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar-autores', function(req, res) {
    Autor.find(function(err, autoresBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los autores',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_autores: autoresBD
            });
        }
    })
});

router.get('/buscar-autor-id/:_id', function(req, res) {
    Autor.findById(req.body._id, function(err, autorBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún autor con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                autor: autorBD
            });
        }
    })
});

// router.get('/buscar-contacto-correo/:correo', function(req, res) {
//     Contacto.find({ correo: req.body.correo }, function(err, contactoBD) {
//         if (err) {
//             return res.status(400).json({
//                 success: false,
//                 msj: 'No se encontró ningún contacto con ese correo',
//                 err
//             });
//         } else {
//             return res.json({
//                 success: true,
//                 contacto: contactoBD
//             });
//         }
//     })
// });

module.exports = router;