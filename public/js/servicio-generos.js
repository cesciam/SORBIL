'use strict';

let registrarGenero = (pgenero) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-genero',
        // headers: { 'content-type': 'application/x-www-form-urlencoded' },
        responseType: 'json',
        data: {
            nombre: pgenero,
        }
    });
};

let obtenerGeneros = async () => {
    try {
        await axios({
            method: 'get',
            url: 'http://localhost:4000/api/registrar-genero',
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            responseType: 'json',
        })
            .then((res) => {
                return res.lista_generos;
            })
    } catch {

    }
};