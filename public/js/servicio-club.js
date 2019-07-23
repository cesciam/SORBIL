'use strict';

let registrarClub = (ptipo, pnombre, ptema, pcorreo, ptelefono, pcategoria, pgenero, pfecha, pprovincia, pcanton, pdistrito, pdireccion_exacta) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-club',
        responseType: 'json',
        data: {
            tipo: ptipo,
            nombre: pnombre,
            tema: ptema,
            correo: pcorreo,
            telefono: ptelefono,
            categoria: pcategoria,
            genero: pgenero,
            fecha: pfecha,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion_exacta: pdireccion_exacta
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