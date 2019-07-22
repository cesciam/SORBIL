'use strict';

let registrarLibreria = (pavatar, pusuario, pcorreo, pcontrasenna, pempresa, ptelefono, pprovincia, pcanton, pdistrito, pdireccionExacta) => {
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
            provincia:pprovincia,
            canton:pcanton,
            distrito:pdistrito,
            direccion_exacta: pdireccionExacta
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