'use strict';

let registrarAutor = (pautor) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-autor',
        responseType: 'json',
        data: {
            genero: pautor
        }
    });
};

let obtenerAutor = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-autor',
            responseType: 'json'
        });

        const result = await response;

        return result.data.lista_autor;
    } catch (error) {
        alert(error);
    }
};