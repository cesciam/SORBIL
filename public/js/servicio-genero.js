'use strict';

let registrarGenero = (pgenero) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-genero',
        responseType: 'json',
        data: {
            genero: pgenero
        }
    });
};

let obtenerGeneros = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-generos',
            responseType: 'json'
        });

        const result = await response;

        return result.data.lista_generos;
    } catch (error) {
        alert(error);
    }
};

let obtenerGeneroid = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-genero-id/${_id}`,
            responseType: 'json'
        });

        return response.data.genero;
    } catch (error) {
        console.log(error);
    }
};

let modificar = (pid, pgenero) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar-genero',
        responseType: 'json',
        data: {
            _id: pid,
            genero: pgenero
        }
    });
};