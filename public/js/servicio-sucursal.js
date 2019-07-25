'use strict';

let registrarSucursal = (pnombre, ptelefono, pcorreo, pprovincia, pcanton, pdistrito) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-sucursal',
        responseType: 'json',
        data: {
            nombre: pnombre,
            telefono: ptelefono,
            correo: pcorreo,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,            
        }
    });
};

let obtenerSucursales= async() => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-sucursales',
            responseType: 'json'
        });

        return response.data.lista_sucursales;
    } catch (error) {
        console.log(error);
    }
};