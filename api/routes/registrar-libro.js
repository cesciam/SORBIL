'use strict';

const express = require('express'),
    router = express.Router(),
    Registro_libro = require('../models/registro-libro.model');


router.param('_id', function(req, res, next, _id){
    req.body._id = _id;
    next();
});

router.param('autor', function(req, res, next, autor) {
    req.body.autor = autor;
    next();
});

//Definicion de la ruta para registrar los libros

router.post('/registrar-libro', function (req, res) {
    let body = req.body;

    let nuevo_libro = new Registro_libro({
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
        isbn: body.isbn,
        portada: body.portada,
        contraportada: body.contraportada,
        sinopsis: body.sinopsis,
        cantidad: body.cantidad,
        estado: 'habilitado'
    });


    nuevo_libro.save(
        function (err, libroDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El libro no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El libro se guardó con éxito'
                });
            }
        }
    );
});


router.get('/listar-libros', function (req, res) {
    Registro_libro.find(function (err, libroDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los libros',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_libros: libroDB
            });
        }
    })
});


router.get('/buscar-libro-id/:_id', function (req, res) {
    Registro_libro.findById(req.body._id, function (err, libroDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ningun libro con ese id.',
                err
            });
        } else {
            return res.json({
                success: true,
                libro: libroDB
            });
        }
    })
});


router.post('/agregar-oferta', function(req, res) {
    Registro_libro.update({ _id: req.body._id }, {
            $push:{ 
                'ofertas': {
                    porcentaje: req.body.porcentaje,                 
                }
            }
        },
        function(error){
            if (error) {
                return res.status(400).json({
                    success: false,
                    msj: 'No se pudo agregar la oferta',
                    error
                });
            } else{
                res.json({
                    success: true,
                    msj: 'La oferta se guardó con éxito'
                });
            }
        }
    )
});

router.get('/buscar-ofertas/:_id', function (req, res) {
    Registro_libro.find(req.body._id, function (err, libroDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ninguna oferta con ese id.',
                err
            });
        } else {
            return res.json({
                success: true,
                libro: libroDB
            });
        }
    })
});

router.get('/listar-ofertas', function (req, res) {
    Registro_libro.find(function (err, ofertasDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los libros',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_ofertas: ofertasDB
            });
        }
    })
});


router.get('/buscar-libro-autor/:autor', function (req, res) {
    Registro_libro.find({autor:req.body.autor}, function (err, libroDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ningun libro con ese id.',
                err
            });
        } else {
            return res.json({
                success: true,
                libro: libroDB
            });
        }
    })
});

router.post('/actualizar-cantidad-libros', function(req, res){
    
    Registro_libro.findByIdAndUpdate(req.body.id, {
            $set: {
                'cantidad': req.body.cantidad
            }
            
        },
        function(error){
            if (error) {
                return res.json({
                    success: false,
                    msj: 'No se actualizar la cantidad de libros',
                    error
                });
            } else{
                res.json({
                    success: true,
                    msj: 'El libro se actualizo con exito'
                });
            }
        }
    )


});

router.post('/habilitar-oferta', function(req, res){
    
    Registro_libro.findOneAndUpdate({ _id: req.body._id }, {
            $set: {
                'ofertas': req.body.ofertas
            }
            
        },
        function(error){
            if (error) {
                return res.json({
                    success: false,
                    msj: 'No se pudo habilitar la oferta',
                    error
                });
            } else{
                res.json({
                    success: true,
                    msj: 'La oferta se habilitó con éxito'
                });
            }
        }
    )
});

router.post('/deshabilitar-oferta', function(req, res){
    
    Registro_libro.findOneAndUpdate({ _id: req.body._id }, {
            $set: {
                'ofertas': req.body.ofertas
            }
            
        },
        function(error){
            if (error) {
                return res.json({
                    success: false,
                    msj: 'No se pudo deshabilitar la oferta',
                    error
                });
            } else{
                res.json({
                    success: true,
                    msj: 'La oferta se deshabilitó con éxito'
                });
            }
        }
    )
});

router.post('/modificar-estado-libros', function(req, res) {
    let body = req.body;

    Registro_libro.findByIdAndUpdate(body._id, {
            $set: {
                'estado': req.body.estado
            }
        },
        function(error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo modificar la tarjeta' });
            } else {
                res.json({ success: true, msg: 'La tarjeta se modificó con éxito' });
            }
        }
    )
});

module.exports = router;