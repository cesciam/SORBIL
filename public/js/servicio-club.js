'use strict';

let registrarClub = (pusuario, ptema, pcorreo, ptelefono, pcategoria, pgenero, pfecha, pprovincia, pcanton, pdistrito) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-club',
        responseType: 'json',
        data: {
            usuario: pusuario,
            tema: ptema,
            correo: pcorreo,
            telefono: ptelefono,
            categoria: pcategoria,
            genero: pgenero,
            fecha: pfecha,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito
        }
    });
};

let obtenerClubes = async () => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-clubes',
            responseType: 'json'
        });

        return response.data.lista_clubes;
    } catch (error) {
        console.log(error);
    }
};