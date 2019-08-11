'use strict';

let registrarAutor = (pimagen, pautor, pbiografia, pfechaNacimiento, pfechaDefuncion, pNacionalidad) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-autor',
        responseType: 'json',
        data: {
            imagen: pimagen,
            autor: pautor,
            biografia: pbiografia,
            fecha_nacimiento: pfechaNacimiento,
            fecha_defuncion: pfechaDefuncion,
            nacionalidad: pNacionalidad
        }
    });
};

let obtenerAutor = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-autores',
            responseType: 'json'
        });

        const result = await response;

        return result.data.lista_autores;
    } catch (error) {
        alert(error);
    }
};

let obtenerAutorid = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-autor-id/${_id}`,
            responseType: 'json'
        });

        return response.data.autor;
    } catch (error) {
        console.log(error);
    }
};