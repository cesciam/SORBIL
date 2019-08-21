'use strict';

const express = require('express'),
    router = express.Router(),
    venta = require('../models/ventas.model');




//Definición de la ruta para registrar contactos
router.post('/registrar-venta', function(req, res) {
    let body = req.body;

    let nuevo_venta = new venta({
        idlibreria: body.idlibreria,
        idSuc: body.idSuc,
        idUser: body.idUser,
        idLibro: body.idLibro
    });

    nuevo_venta.save(
        function(err, ventaDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'La venta no se pudo registrar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'La venta se registró con éxito'
                });
            }
        }
    );
});


module.exports = router;