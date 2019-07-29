'use strict';

const express = require('express'),
    router = express.Router(),
    Usuario = require('../models/usuario.model');

router.param('_id', function(req, res, next, _id) {
    req.body._id = _id;
    next();
});

router.param('correo', function(req, res, next, correo) {
    req.body.correo = correo;
    next();
});


router.post('/registrar-usuario', function(req, res) {
    let body = req.body;

    let nuevo_usuario = new Usuario({
        avatar: body.avatar,
        usuario: body.usuario,
        correo: body.correo,
        contrasena: body.contrasena,
        nombre: body.nombre,
        id: body.id,
        primer_apellido: body.primer_apellido,
        segundo_apellido: body.segundo_apellido,
        sexo: body.sexo,
        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,
        direccion_exacta: body.direccion_exacta,
        direccion_latitud: body.direccion_latitud,
        direccion_longitud: body.direccion_longitud
    });

    nuevo_usuario.save(
        function(err, usuariosBD) {
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

router.post('/validar-credenciales', function(req, res) {
    Usuario.findOne({ correo: req.body.correo }).then(
        function(usuario) {
            if (usuario) {
                if (usuario.contrasena == req.body.contrasena) {
                    res.json({
                        success: true,
                        usuario: usuario
                    });
                } else {
                    res.json({
                        success: false,
                        hola: "Aqui"
                    });
                }
            } else {
                res.json({
                    success: false,
                    msg: 'El usuario no existe'
                });
            }
        }
    )
});

router.get('/listar-usuarios', function(req, res) {
    Usuario.find(function(err, usuariosBD) {
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

router.get('/buscar-usuario-id/:_id', function(req, res) {
    Usuario.findById(req.body._id, function(err, usuarioDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontro ninguna librería con ese _id.',
                err
            });
        } else {
            return res.json({
                success: true,
                usuario: usuarioDB
            });
        }
    })
});

router.get('/buscar-usuario-correo/:correo', function(req, res) {
    Usuario.find({ correo: req.body.correo }, function(err, usuarioBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún usuario con ese correo',
                err
            });
        } else {
            return res.json({
                success: true,
                usuario: usuarioBD
            });
        }
    })
});

router.post('/agregar-tarjeta', function(req, res) {
    Usuario.update({ _id: req.body._id }, {
            $push:{ 
                'tarjetas': {
                    nombre: req.body.nombre,
                    num_tarjeta: req.body.num_tarjeta,
                    fecha_ven: req.body.fecha_ven,
                    cvv: req.body.cvv   
                }
            }
        },
        function(error){
            if (error) {
                return res.status(400).json({
                    success: false,
                    msj: 'No se pudo agregar la tarjeta',
                    error
                });
            } else{
                res.json({
                    success: true,
                    msj: 'La tarjeta se guardó con éxito'
                });
            }
        }
    )
});

module.exports = router;