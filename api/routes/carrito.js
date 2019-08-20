'use strict';

const express = require('express'),
    router = express.Router(),
    carrito = require('../models/carrito.model');


router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

//Definición de la ruta para registrar carrito de compras

router.post('/registrar-carrito', function(req, res) {
    let body = req.body;

    let nuevo_carrito = new carrito({
        idUsuario: body.idUsuario,
        idLibro: body.idLibro,
        idLib: body.idLib,
        idSuc: body.idSuc
    });

    nuevo_carrito.save(
        function(err, carritoBD) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El objeto no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El objeto se guardó con éxito'
                });
            }
        }
    );
});


module.exports = router;