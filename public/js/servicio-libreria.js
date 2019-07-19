'use strict';

let registrarLibreria = (pusuario,pcorreo,pcontrasenna,pverificacion_contrasenna,pempresa,ptelefono,pprovincia,pcanton,pdistrito) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-libreria',
        responseType: 'json',
        data: {
            usuario:pusuario,
            correo:pcorreo,
            contrasenna:pcontrasenna,
            verificacion_contrasenna:pverificacion_contrasenna,
            empresa:pempresa,
            telefono:ptelefono,
            provincia:pprovincia,
            canton:pcanton,
            distrito:pdistrito,
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