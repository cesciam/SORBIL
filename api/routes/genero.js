'use strict';

const express = require('express'),
    router = express.Router(),
    Genero = require('../models/genero.model');

//Definición de la ruta para registrar generos

router.post('/registrar-genero', function (req, res) {
    let body = req.body;

    let nuevo_genero = new Genero({
        genero: body.genero
    });

    nuevo_genero.save(
        function (err, generoDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El genero no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El genero se guardó con éxito'
                });
            }
        }
    );
});

// router.get('/listar-generos', async function (req, res) {
//     Genero.find()
//         .then(lista_generos => {
//             return res.json({
//                 success: true,
//                 lista_generos: lista_generos
//             });
//         })
//         .catch(err => { throw new Error(err) });
// });

// module.exports = router; 

router.get('/listar-generos', async function (req, res) {
    Genero.find(function (err, generosDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los contactos',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_generos: generosDB
            });
        }
    })
});

module.exports = router; 


