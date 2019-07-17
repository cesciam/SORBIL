'use strict';

let registrarUsuario = (pusuario, pcorreo, pcontrasena, pverfContrasena, plibreria, pclub, pnombre, pid, psexo, pprimerApellido, psegundoApellido, pprovincia, pcanton, pdistrito, pdireccionExacta) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-contacto',
        responseType: 'json',
        data: {
            usuario: pusuario,
            correo: pcorreo,
            contrasena: pcontrasena,
            verfContrasena: pverfContrasena,
            libreria: plibreria,
            club: pclub,
            nombre: pnombre,
            identificacion: pidentificacion,
            sexo: psexo,
            primer_apellido: pprimerApellido,
            segundo_apellido: psegundoApellido,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion_exacta: pdireccionExacta
        }
    });
};

let obtenerUsuarios = async() => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-contactos',
            responseType: 'json'
        });

        return response.data.lista_usuarios;
    } catch (error) {
        console.log(error);
    }
};