'use strict';

let registrarLibreria = (pavatar, pusuario, pcorreo, pcontrasenna, pempresa, ptelefono, pdescripcion, pprovincia, pcanton, pdistrito, pdireccion_exacta, pgeoloc) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-libreria',
        responseType: 'json',
        data: {
            avatar: pavatar,
            usuario:pusuario,
            correo:pcorreo,
            contrasenna:pcontrasenna,
            empresa:pempresa,
            telefono:ptelefono,
            descripcion:pdescripcion,
            provincia:pprovincia,
            canton:pcanton,
            distrito:pdistrito,
            direccion_exacta: pdireccion_exacta,
            geoloc: pgeoloc
        }
    });
};

let obtenerLibrerias = async () => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-librerias',
            responseType: 'json'
        });

        return response.data.lista_librerias;
    } catch (error) {
        console.log(error);
    }
};

let obtenerLibreriaid = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-libreria-id/${_id}`,
            responseType: 'json'
        });

        return response.data.libreria;
    } catch (error) {
        console.log(error);
    }
};