'use strict';

const express = require('express');
const router = express.Router();
const Registro_libro = require('../models/registro-libro.model');

//Definicion de la ruta para registrar los libros

router.post('/registrar-libro', function(req, res){
    let body = req.body;

    let nuevo_libro = new Registro_libro ({
        titulo: body.titulo,
        autor: body.autor,
        edicion: body.edicion,
        editorial: body.editorial,
        fecha: body.fecha,
        categoria: body.categoria,
        genero: body.genero,
        idioma: body.idioma,
        precio: body.precio,
        tipo: body.tipo,
        isbn: body.isbn
    });


    nuevo_libro.save(
        function(err, libroDB){
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El libro no se pudo guardar',
                    err
                });
            }else{
                res.json({
                    success: true,
                    msj: 'El libro se guardó con éxito'
                });
            }
        }
    );
});

module.exports = router;