'use strict';

let registrarClub = (pnombre, ptema, ptelefono, pcorreo, pfecha, pcategoria, pgenero) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-club-virtual',
        responseType: 'json',
        data: {
            nombre: pnombre,
            tema: ptema,
            correo: pcorreo,
            telefono: ptelefono,
            categoria: pcategoria,
            genero: pgenero,
            fecha: pfecha,
        }
    });
};

let obtenerClubes = async () => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-clubes-virtuales',
            responseType: 'json'
        });

        return response.data.lista_clubes;
    } catch (error) {
        console.log(error);
    }
};